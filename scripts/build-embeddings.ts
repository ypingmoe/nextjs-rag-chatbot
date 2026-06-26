import "dotenv/config";
import { buildEmbeddingsIndex } from "../src/lib/rag";

async function main() {
  console.log("Building embeddings index from data/docs/ …");
  const index = await buildEmbeddingsIndex();
  console.log(`Done. ${index.chunks.length} chunks indexed with ${index.model}.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
