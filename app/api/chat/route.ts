import {
  convertToModelMessages,
  streamText,
  type UIMessage,
} from "ai";
import { openai } from "@ai-sdk/openai";
import { google } from "@ai-sdk/google";
import { retrieveRelevantDocs } from "@/lib/rag";

export const maxDuration = 30;

function getModel() {
  const provider = process.env.LLM_PROVIDER || "openai";
  const modelName = process.env.LLM_MODEL || "gpt-4o-mini";

  switch (provider) {
    case "google":
    case "gemini":
      return google(modelName);
    case "openai":
    case "deepseek":
    default:
      return openai(modelName);
  }
}

function buildSystemPrompt(contextChunks: string[]): string {
  const context =
    contextChunks.length > 0
      ? contextChunks.map((c, i) => `[${i + 1}] ${c}`).join("\n\n")
      : "No relevant documents found.";

  return `You are LUCI's friendly product assistant. Help users understand the product based on the documentation provided below.

## Rules
- Answer questions based on the provided documentation context.
- If the information is not in the context, say you don't have that information and suggest they contact support.
- Be concise and helpful.
- When appropriate, suggest downloading the LUCI app for the best experience.
- Respond in the same language the user writes in.

## Documentation Context
${context}`;
}

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  // Get the latest user message for RAG retrieval
  const lastUserMessage = [...messages]
    .reverse()
    .find((m) => m.role === "user");
  const query =
    lastUserMessage?.parts
      ?.filter((p): p is { type: "text"; text: string } => p.type === "text")
      .map((p) => p.text)
      .join(" ") || "";

  // Retrieve relevant documents
  let contextChunks: string[] = [];
  try {
    const docs = await retrieveRelevantDocs(query);
    contextChunks = docs.map((d) => `[Source: ${d.source}]\n${d.text}`);
  } catch {
    // Vector store might not exist yet — continue without context
    console.warn("RAG retrieval failed, proceeding without context");
  }

  const result = streamText({
    model: getModel(),
    system: buildSystemPrompt(contextChunks),
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
