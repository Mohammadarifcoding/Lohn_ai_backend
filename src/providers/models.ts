import { ChatOpenAI } from "@langchain/openai";
import { config } from "../config/index.js";

const gpt4o = new ChatOpenAI({
  model: "gpt-4o",
  apiKey: config.OPENROUTER_API_KEY,
  temperature: 0.3,
  maxRetries: 2,
  timeout: 30000,
  maxTokens: 1500,
  topP: 0.9,
  frequencyPenalty: 0.2,
  configuration: {
    baseURL: config.AI_GATEWAY_URL,
  },
});

const gpt4oMini = new ChatOpenAI({
  model: "gpt-4o-mini",
  apiKey: config.OPENROUTER_API_KEY,
  temperature: 0.0,
  maxRetries: 2,
  timeout: 20000,
  maxTokens: 800,
  configuration: {
    baseURL: config.AI_GATEWAY_URL,
  },
});

const claude = new ChatOpenAI({
  model: "anthropic/claude-sonnet-4.6",
  apiKey: config.OPENROUTER_API_KEY,
  temperature: 0.7,
  maxRetries: 2,
  timeout: 60000,
  maxTokens: 2500,
  topP: 0.95,
  frequencyPenalty: 0.3,
  configuration: {
    baseURL: config.AI_GATEWAY_URL,
  },
});

const qwen = new ChatOpenAI({
  model: "qwen/qwen3-max-thinking",
  apiKey: config.OPENROUTER_API_KEY,
  temperature: 0.2,
  maxRetries: 2,
  timeout: 45000,
  maxTokens: 1200,
  topP: 0.8,
  configuration: {
    baseURL: config.AI_GATEWAY_URL,
  },
});

export const models = {
  gpt4o,
  gpt4oMini,
  claude,
  qwen,
};

export type Model = keyof typeof models;

export type ModelProvider = (typeof models)[Model];
