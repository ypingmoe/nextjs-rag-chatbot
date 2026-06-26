# Getting Started with This Chatbot

This demo is a RAG chatbot built with Next.js 15 and the Vercel AI SDK.

## Quick start

```bash
git clone https://github.com/ypingmoe/nextjs-rag-chatbot.git
cd nextjs-rag-chatbot
cp .env.example .env.local
npm install
npm run embed   # builds vector index from data/docs/
npm run dev
```

Open http://localhost:3000 and ask questions about RAG, Next.js, or AI integration.

## How it works

1. Markdown files in `data/docs/` are chunked and embedded
2. Embeddings are saved to `data/embeddings.json`
3. On each chat message, the top 3 relevant chunks are retrieved
4. Chunks are injected into the system prompt for grounded answers

## Customize for your site

Replace `data/docs/` with your own content, run `npm run embed`, and deploy.

For production, swap the JSON vector store for pgvector or Pinecone and add authentication.
