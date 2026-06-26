export type DocumentChunk = {
  id: string;
  source: string;
  content: string;
  embedding: number[];
};

export type VectorIndex = {
  model: string;
  createdAt: string;
  chunks: DocumentChunk[];
};

export function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  const denom = Math.sqrt(normA) * Math.sqrt(normB);
  return denom === 0 ? 0 : dot / denom;
}

export function searchChunks(
  queryEmbedding: number[],
  chunks: DocumentChunk[],
  topK = 3
): DocumentChunk[] {
  return [...chunks]
    .map((chunk) => ({
      chunk,
      score: cosineSimilarity(queryEmbedding, chunk.embedding),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map(({ chunk }) => chunk);
}
