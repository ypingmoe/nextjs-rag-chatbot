# Next.js + Vercel AI SDK

The Vercel AI SDK (`ai` package) is the standard way to add streaming LLM chat to Next.js apps.

## Core pieces

- **`streamText`**: Stream tokens from OpenAI, Anthropic, etc.
- **`useChat`**: React hook for chat UI with message history
- **`embed` / `embedMany`**: Generate embeddings for RAG
- **App Router route handlers**: Keep API keys server-side

## Best practices for AI web apps

1. Never expose API keys in the browser — use Route Handlers or Server Actions
2. Stream responses for better UX on long answers
3. Include source citations in the system prompt when using RAG
4. Add rate limiting and input validation in production
5. Log prompts and retrieval scores for debugging (LLMOps)

## Deployment

Deploy to Vercel with environment variables set in the dashboard. The AI SDK works out of the box with Edge or Node runtimes.
