import { tavily } from "@tavily/core";
import { config } from "../config/index.js";

// Shared Tavily SDK client used by research retrieval.
export const tavilyClient = tavily({
  apiKey: config.TAVILY_API_KEY,
});
