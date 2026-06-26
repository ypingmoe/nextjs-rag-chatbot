"use client";

import { useChat } from "@ai-sdk/react";

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
            <p className="mb-2 text-xs font-medium text-slate-700">
              Try asking:
            </p>
            <div className="flex flex-wrap gap-2">
              {STARTERS.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => append({ role: "user", content: q })}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-left text-xs text-slate-600 hover:border-indigo-300 hover:text-indigo-700"
                >
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
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide opacity-60">
                {m.role === "user" ? "You" : "Assistant"}
              </p>
              <div className="whitespace-pre-wrap">{m.content}</div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="text-sm text-slate-400">Retrieving context...</div>
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
            className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
