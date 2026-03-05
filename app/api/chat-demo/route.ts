import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { openai } from "@ai-sdk/openai";
import { google } from "@ai-sdk/google";

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

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: getModel(),
    system: `You are LUCI's friendly product assistant.
Be concise and helpful. Respond in the same language the user writes in.
If asked about LUCI features, make up reasonable answers for demo purposes.`,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
