"use client";

import { useChat } from "@ai-sdk/react";
import {
  ArrowPathIcon,
  ChatBubbleLeftEllipsisIcon,
  LightBulbIcon,
  PaperAirplaneIcon,
  SparklesIcon,
  UserIcon,
} from "@/components/icons";

const STARTERS = [
  "What is RAG and when should I use it?",
  "How does the Vercel AI SDK work with Next.js?",
  "How do I customize this chatbot for my website?",
];

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, append } =
    useChat();

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4">
            <p className="mb-2 flex items-center gap-1.5 text-xs font-medium text-slate-700">
              <LightBulbIcon size={14} className="text-amber-500" />
              Try asking:
            </p>
            <div className="flex flex-wrap gap-2">
              {STARTERS.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => append({ role: "user", content: q })}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-left text-xs text-slate-600 hover:border-indigo-300 hover:text-indigo-700"
                >
                  <ChatBubbleLeftEllipsisIcon
                    size={12}
                    className="shrink-0 text-indigo-400"
                  />
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-indigo-600 text-white"
                  : "border border-slate-200 bg-white text-slate-800 shadow-sm"
              }`}
            >
              <p className="mb-1 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide opacity-60">
                {m.role === "user" ? (
                  <>
                    <UserIcon size={12} />
                    You
                  </>
                ) : (
                  <>
                    <SparklesIcon size={12} />
                    Assistant
                  </>
                )}
              </p>
              <div className="whitespace-pre-wrap">{m.content}</div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <ArrowPathIcon size={16} className="animate-spin" />
            Retrieving context...
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="border-t border-slate-200 bg-white p-3"
      >
        <div className="flex gap-2">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask a question..."
            className="flex-1 rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none ring-indigo-500 focus:ring-2"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
          >
            <PaperAirplaneIcon size={16} />
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
