# Next.js RAG Chatbot

> RAG chatbot with Next.js App Router, OpenAI embeddings, vector search, and streaming UI — ready to integrate into your website.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![OpenAI](https://img.shields.io/badge/OpenAI-RAG-412991?logo=openai)](https://openai.com)
[![Vercel AI SDK](https://img.shields.io/badge/Vercel-AI%20SDK-black)](https://sdk.vercel.ai)

## Quickstart

```bash
git clone https://github.com/ypingmoe/nextjs-rag-chatbot.git
cd nextjs-rag-chatbot
cp .env.example .env.local
npm install
npm run embed   # builds vector index (requires OPENAI_API_KEY)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What it does

- **Ingests** markdown docs from `data/docs/`
- **Embeds** chunks with OpenAI `text-embedding-3-small`
- **Retrieves** top-k relevant chunks per query
- **Streams** grounded answers via Vercel AI SDK + `useChat`

Perfect starter for adding AI search/chat to SaaS dashboards, docs sites, and marketing pages.

## Architecture

```
User message
    → embed query
    → cosine search over data/embeddings.json
    → inject context into system prompt
    → streamText (gpt-4o-mini)
    → streaming UI
```

## Customize for production

1. Replace `data/docs/` with your content
2. Run `npm run embed`
3. Swap JSON store for **pgvector** or **Pinecone**
4. Add auth, rate limiting, and evals

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENAI_API_KEY` | Yes | OpenAI API key |
| `OPENAI_CHAT_MODEL` | No | Default: `gpt-4o-mini` |
| `OPENAI_EMBEDDING_MODEL` | No | Default: `text-embedding-3-small` |

## Topics

`rag` · `llm` · `chatbot` · `nextjs` · `vercel-ai-sdk` · `openai` · `typescript` · `vector-search` · `retrieval-augmented-generation` · `streaming` · `ai-integration` · `full-stack` · `react` · `embeddings` · `semantic-search` · `document-qa` · `saas` · `web-app` · `llmops` · `ai-engineering`

## Author

Built by [@ypingmoe](https://github.com/ypingmoe) — AI integration engineer.  
Website: [yping.yieldlyx.org](https://yping.yieldlyx.org)

## License

MIT
