# Agent instructions

- TypeScript strict mode; use `@/` path aliases.
- API keys stay server-side only - never import OpenAI client in client components.
- Chat logic lives in `src/app/api/chat/route.ts`; RAG logic in `src/lib/rag.ts`.
- Run `npm run embed` after changing files in `data/docs/`.
- Prefer Vercel AI SDK (`ai`, `@ai-sdk/openai`) over raw fetch to OpenAI.
