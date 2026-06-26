import { ChatWidget } from "@/components/chat-widget";
import {
  ArrowTopRightOnSquareIcon,
  GitHubIcon,
} from "@/components/icons";

export default function Home() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          AI support for your product docs
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          A Next.js RAG chatbot that answers from your markdown knowledge base.
          Click the chat icon in the bottom-right corner to try it.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="https://github.com/ypingmoe/nextjs-rag-chatbot"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-700"
          >
            <GitHubIcon size={16} />
            Clone on GitHub
            <ArrowTopRightOnSquareIcon size={14} className="opacity-60" />
          </a>
          <a
            href="https://github.com/ypingmoe/nextjs-rag-chatbot"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-indigo-600"
          >
            <GitHubIcon size={14} />
            View source on GitHub
            <ArrowTopRightOnSquareIcon size={12} className="opacity-60" />
          </a>
        </div>
      </div>

      <ChatWidget />
    </>
  );
}
