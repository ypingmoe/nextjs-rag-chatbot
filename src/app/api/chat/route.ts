import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { retrieveContext } from "@/lib/rag";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();
  const lastMessage = messages[messages.length - 1];
  const userQuery =
    typeof lastMessage?.content === "string" ? lastMessage.content : "";

  let context = "";
  try {
    context = await retrieveContext(userQuery);
  } catch {
    context = "Vector index unavailable. Run `npm run embed` first.";
  }

  const result = streamText({
    model: openai(process.env.OPENAI_CHAT_MODEL ?? "gpt-4o-mini"),
    system: `You are a helpful AI assistant for a developer documentation site.
Answer using ONLY the context below. If the context doesn't contain the answer, say you don't know and suggest checking the docs.
Always mention which source file your answer comes from when possible.

<context>
${context}
</context>`,
    messages,
  });

  return result.toDataStreamResponse();
}
