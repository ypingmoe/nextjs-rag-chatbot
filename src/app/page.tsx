import { ChatWidget } from "@/components/chat-widget";

const FEATURES = [
  {
    title: "Retrieval-augmented answers",
    description:
      "Responses are grounded in your docs via semantic search and OpenAI embeddings.",
  },
  {
    title: "Streaming UI",
    description:
      "Built with the Vercel AI SDK for fast, token-by-token replies in the browser.",
  },
  {
    title: "Drop-in widget",
    description:
      "Embed a floating chat bubble on any page — just like a typical SaaS support widget.",
  },
];

export default function Home() {
  return (
    <>
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
              R
            </div>
            <span className="font-semibold text-slate-900">RAGBot</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-600 sm:flex">
            <a href="#features" className="hover:text-indigo-600">
              Features
            </a>
            <a
              href="https://github.com/ypingmoe/nextjs-rag-chatbot"
              className="hover:text-indigo-600"
            >
              GitHub
            </a>
          </nav>
          <a
            href="https://github.com/ypingmoe/nextjs-rag-chatbot"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            View source
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-20 text-center sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
            ypingmoe | AI integration demo
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            AI support for your product docs
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            A Next.js RAG chatbot that answers from your markdown knowledge base.
            Click the chat icon in the bottom-right corner to try it.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#features"
              className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-700"
            >
              See features
            </a>
            <a
              href="https://github.com/ypingmoe/nextjs-rag-chatbot"
              className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700"
            >
              Clone on GitHub
            </a>
          </div>
        </section>

        <section id="features" className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="text-center text-2xl font-bold text-slate-900">
              Everything you need for doc-aware chat
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">
              Next.js 15, Vercel AI SDK, and OpenAI — wired together as a
              production-ready starter.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-xs text-slate-400">
          <a
            href="https://github.com/ypingmoe/nextjs-rag-chatbot"
            className="hover:text-indigo-600"
          >
            View source on GitHub
          </a>
        </div>
      </footer>

      <ChatWidget />
    </>
  );
}
