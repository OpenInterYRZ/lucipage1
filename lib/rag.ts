import { LocalIndex } from "vectra";
import { OpenAI } from "openai";
import path from "path";

const VECTOR_STORE_DIR = path.join(process.cwd(), "data", "vectorstore");

let indexInstance: LocalIndex | null = null;

async function getIndex(): Promise<LocalIndex> {
  if (!indexInstance) {
    indexInstance = new LocalIndex(VECTOR_STORE_DIR);
    if (!(await indexInstance.isIndexCreated())) {
      throw new Error(
        "Vector store not found. Run `npx tsx scripts/ingest.ts` first."
      );
    }
  }
  return indexInstance;
}

async function getEmbedding(text: string): Promise<number[]> {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });
  return response.data[0].embedding;
}

export interface RetrievedDoc {
  text: string;
  source: string;
  score: number;
}

export async function retrieveRelevantDocs(
  query: string,
  topK: number = 5
): Promise<RetrievedDoc[]> {
  const index = await getIndex();
  const vector = await getEmbedding(query);
  const results = await index.queryItems(vector, query, topK);

  return results
    .filter((r) => r.score > 0.7)
    .map((r) => ({
      text: r.item.metadata.text as string,
      source: r.item.metadata.source as string,
      score: r.score,
    }));
}
