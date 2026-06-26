import { Chat } from "@/components/chat";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col px-4 py-8">
      <header className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
          ypingmoe | AI integration demo
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Next.js RAG Chatbot
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Retrieval-augmented chat over markdown docs. Built with Next.js 15,
          Vercel AI SDK, and OpenAI embeddings.
        </p>
      </header>

      <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
        <Chat />
      </div>

      <footer className="mt-4 text-center text-xs text-slate-400">
        <a
          href="https://github.com/ypingmoe/nextjs-rag-chatbot"
          className="hover:text-indigo-600"
        >
          View source on GitHub
        </a>
      </footer>
    </main>
  );
}
