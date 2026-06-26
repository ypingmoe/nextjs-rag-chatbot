"use client";

import { useState } from "react";
import { Chat } from "@/components/chat";
import {
  BotIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  XMarkIcon,
} from "@/components/icons";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {isOpen && (
        <div
          className="flex h-[min(520px,calc(100vh-7rem))] w-[min(380px,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
          role="dialog"
          aria-label="Chat assistant"
        >
          <div className="flex items-center justify-between border-b border-slate-200 bg-indigo-600 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500 text-white">
                <BotIcon size={20} />
              </div>
              <div>
                <p className="flex items-center gap-1.5 text-sm font-semibold text-white">
                  <SparklesIcon size={14} />
                  AI Assistant
                </p>
                <p className="text-xs text-indigo-200">
                  Ask about RAG, Next.js, or AI
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1.5 text-indigo-200 transition hover:bg-indigo-500 hover:text-white"
              aria-label="Close chat"
            >
              <XMarkIcon size={20} />
            </button>
          </div>
          <div className="min-h-0 flex-1">
            <Chat />
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg transition hover:bg-indigo-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <XMarkIcon size={24} />
        ) : (
          <ChatBubbleLeftRightIcon size={24} />
        )}
      </button>
    </div>
  );
}
