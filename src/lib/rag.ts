import fs from "fs/promises";
import path from "path";
import { embedMany } from "ai";
import { openai } from "@ai-sdk/openai";
import type { DocumentChunk, VectorIndex } from "./vector-store";

const DOCS_DIR = path.join(process.cwd(), "data", "docs");
const INDEX_PATH = path.join(process.cwd(), "data", "embeddings.json");
const EMBEDDING_MODEL =
  process.env.OPENAI_EMBEDDING_MODEL ?? "text-embedding-3-small";

function chunkText(text: string, maxChars = 900): string[] {
  const paragraphs = text.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  const chunks: string[] = [];
  let current = "";

  for (const paragraph of paragraphs) {
    if ((current + "\n\n" + paragraph).length > maxChars && current) {
      chunks.push(current.trim());
      current = paragraph;
    } else {
      current = current ? `${current}\n\n${paragraph}` : paragraph;
    }
  }

  if (current) chunks.push(current.trim());
  return chunks;
}

export async function loadVectorIndex(): Promise<VectorIndex> {
  const raw = await fs.readFile(INDEX_PATH, "utf-8");
  return JSON.parse(raw) as VectorIndex;
}

export async function retrieveContext(query: string, topK = 3): Promise<string> {
  try {
    const index = await loadVectorIndex();
    const { embeddings } = await embedMany({
      model: openai.embedding(EMBEDDING_MODEL),
      values: [query],
    });

    const queryEmbedding = embeddings[0];
    const scored = index.chunks
      .map((chunk) => ({
        chunk,
        score: dotProduct(queryEmbedding, chunk.embedding),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, topK);

    if (scored.length === 0) return "No relevant context found.";

    return scored
      .map(
        ({ chunk, score }, i) =>
          `[Source ${i + 1}: ${chunk.source} (score: ${score.toFixed(3)})]\n${chunk.content}`
      )
      .join("\n\n---\n\n");
  } catch {
    return keywordFallback(query);
  }
}

async function keywordFallback(query: string): Promise<string> {
  const files = await fs.readdir(DOCS_DIR);
  const terms = query.toLowerCase().split(/\W+/).filter((t) => t.length > 2);
  const results: { source: string; content: string; score: number }[] = [];

  for (const file of files.filter((f) => f.endsWith(".md"))) {
    const content = await fs.readFile(path.join(DOCS_DIR, file), "utf-8");
    const lower = content.toLowerCase();
    const score = terms.reduce((n, t) => n + (lower.includes(t) ? 1 : 0), 0);
    if (score > 0) results.push({ source: file, content: content.slice(0, 1200), score });
  }

  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((r, i) => `[Source ${i + 1}: ${r.source}]\n${r.content}`)
    .join("\n\n---\n\n") || "No relevant context found. Run `npm run embed` to build the vector index.";
}

function dotProduct(a: number[], b: number[]): number {
  let sum = 0;
  for (let i = 0; i < a.length; i++) sum += a[i] * b[i];
  return sum;
}

export async function buildEmbeddingsIndex(): Promise<VectorIndex> {
  const files = (await fs.readdir(DOCS_DIR)).filter((f) => f.endsWith(".md"));
  const allChunks: Omit<DocumentChunk, "embedding">[] = [];

  for (const file of files) {
    const content = await fs.readFile(path.join(DOCS_DIR, file), "utf-8");
    const parts = chunkText(content);

    parts.forEach((part, i) => {
      allChunks.push({
        id: `${file}#${i}`,
        source: file,
        content: part,
      });
    });
  }

  const { embeddings } = await embedMany({
    model: openai.embedding(EMBEDDING_MODEL),
    values: allChunks.map((c) => c.content),
  });

  const chunks: DocumentChunk[] = allChunks.map((chunk, i) => ({
    ...chunk,
    embedding: embeddings[i],
  }));

  const index: VectorIndex = {
    model: EMBEDDING_MODEL,
    createdAt: new Date().toISOString(),
    chunks,
  };

  await fs.writeFile(INDEX_PATH, JSON.stringify(index, null, 2));
  return index;
}
