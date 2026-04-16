import { Pinecone } from "@pinecone-database/pinecone";
import { config } from "../config/index.js";

let client: Pinecone | undefined;

// Lazily initialize a singleton Pinecone client for cache operations.
function getClient(): Pinecone {
  if (!client) {
    client = new Pinecone({ apiKey: config.PINECONE_API_KEY });
  }

  return client;
}

export function getPineconeIndex() {
  return getClient().index(config.PINECONE_INDEX);
}

export function getResearchNamespace() {
  // Research cache is isolated in its own namespace for predictable filtering.
  return getPineconeIndex().namespace("research_cache_v1");
}
