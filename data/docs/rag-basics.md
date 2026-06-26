# RAG (Retrieval-Augmented Generation) Basics

RAG combines retrieval with LLM generation. Instead of relying only on the model's training data, you:

1. **Ingest** documents - split into chunks
2. **Embed** each chunk into a vector
3. **Retrieve** the most relevant chunks for a user query
4. **Generate** an answer grounded in those chunks

This reduces hallucinations and lets you answer questions about your own docs, products, or policies.

## When to use RAG

- Customer support over product documentation
- Internal knowledge base search
- SaaS dashboards with document Q&A
- Any website where answers must cite real data

## Key components

- **Chunking**: Split docs into 300-800 token pieces with overlap
- **Embeddings**: OpenAI `text-embedding-3-small` is cost-effective
- **Vector store**: pgvector, Pinecone, or in-memory for demos
- **Re-ranking**: Optional second pass to improve relevance
