import { LocalIndex } from "vectra";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { OpenAI } from "openai";
import * as fs from "fs";
import * as path from "path";
import { PDFParse } from "pdf-parse";

const DOCUMENTS_DIR = path.join(process.cwd(), "data", "documents");
const VECTOR_STORE_DIR = path.join(process.cwd(), "data", "vectorstore");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function getEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });
  return response.data[0].embedding;
}

async function loadDocument(
  filePath: string
): Promise<{ content: string; source: string }> {
  const ext = path.extname(filePath).toLowerCase();
  const source = path.basename(filePath);

  if (ext === ".pdf") {
    const buffer = fs.readFileSync(filePath);
    const parser = new PDFParse({ data: new Uint8Array(buffer) });
    const data = await parser.getText();
    const text = data.pages.map((p) => p.text).join("\n");
    await parser.destroy();
    return { content: text, source };
  }

  if (ext === ".md" || ext === ".txt") {
    const content = fs.readFileSync(filePath, "utf-8");
    return { content, source };
  }

  throw new Error(`Unsupported file type: ${ext}`);
}

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    console.error("Error: OPENAI_API_KEY environment variable is required");
    process.exit(1);
  }

  // Ensure directories exist
  if (!fs.existsSync(DOCUMENTS_DIR)) {
    fs.mkdirSync(DOCUMENTS_DIR, { recursive: true });
    console.log(`Created ${DOCUMENTS_DIR} — place your documents here.`);
    return;
  }

  const files = fs
    .readdirSync(DOCUMENTS_DIR)
    .filter((f) => /\.(pdf|md|txt)$/i.test(f));

  if (files.length === 0) {
    console.log("No documents found in data/documents/. Add PDF, MD, or TXT files and re-run.");
    return;
  }

  console.log(`Found ${files.length} document(s). Processing...`);

  // Load all documents
  const docs: { content: string; source: string }[] = [];
  for (const file of files) {
    try {
      const doc = await loadDocument(path.join(DOCUMENTS_DIR, file));
      docs.push(doc);
      console.log(`  Loaded: ${file} (${doc.content.length} chars)`);
    } catch (err) {
      console.error(`  Failed to load ${file}:`, err);
    }
  }

  // Split into chunks
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  const chunks: { text: string; source: string; chunkIndex: number }[] = [];
  for (const doc of docs) {
    const splits = await splitter.splitText(doc.content);
    splits.forEach((text, i) => {
      chunks.push({ text, source: doc.source, chunkIndex: i });
    });
  }

  console.log(`Split into ${chunks.length} chunks. Generating embeddings...`);

  // Create vector index
  const index = new LocalIndex(VECTOR_STORE_DIR);
  if (await index.isIndexCreated()) {
    await index.deleteIndex();
  }
  await index.createIndex();

  // Process in batches of 20
  const BATCH_SIZE = 20;
  for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
    const batch = chunks.slice(i, i + BATCH_SIZE);
    const embeddings = await Promise.all(
      batch.map((chunk) => getEmbedding(chunk.text))
    );

    for (let j = 0; j < batch.length; j++) {
      await index.insertItem({
        vector: embeddings[j],
        metadata: {
          text: batch[j].text,
          source: batch[j].source,
          chunkIndex: batch[j].chunkIndex,
        },
      });
    }

    console.log(
      `  Embedded ${Math.min(i + BATCH_SIZE, chunks.length)}/${chunks.length} chunks`
    );
  }

  console.log("Done! Vector store created at data/vectorstore/");
}

main().catch(console.error);
