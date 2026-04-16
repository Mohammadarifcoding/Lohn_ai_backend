import { OpenAIEmbeddings } from "@langchain/openai";
import { config } from "../config/index.js";

// Embedding model used for Pinecone research-cache vectors.
export const researchEmbeddings = new OpenAIEmbeddings({
  apiKey: config.OPENROUTER_API_KEY,
  model: "text-embedding-3-small",
  dimensions: 1024,
  configuration: {
    baseURL: config.AI_GATEWAY_URL,
  },
});
