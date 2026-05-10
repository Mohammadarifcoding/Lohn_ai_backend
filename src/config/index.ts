import { validateEnvironment } from "./env.js";

const { env } = validateEnvironment();

interface Config {
  PORT: number;
  NODE_ENV: "development" | "production";
  DATABASE_URL: string;
  BETTER_AUTH_SECRET: string;
  BETTER_AUTH_URL: string;
  RATE_LIMIT_WINDOW_MS: number;
  RATE_LIMIT_MAX: number;
  PINECONE_API_KEY: string;
  PINECONE_INDEX: string;
  AI_GATEWAY_URL: string;
  OPENROUTER_API_KEY: string;
  TAVILY_API_KEY: string;
  ADMIN_NAME: string;
  ADMIN_EMAIL: string;
  ADMIN_PASSWORD: string;
  TRIGGER_SECRET_KEY?: string;
  BLOG_RESEARCH_CACHE_ENABLED: boolean;
  RESEND_API_KEY: string;
}

export const config: Config = {
  PORT: env.PORT,
  NODE_ENV: env.NODE_ENV,
  DATABASE_URL: env.DATABASE_URL,
  BETTER_AUTH_SECRET: env.BETTER_AUTH_SECRET,
  BETTER_AUTH_URL: env.BETTER_AUTH_URL,
  RATE_LIMIT_WINDOW_MS: env.RATE_LIMIT_WINDOW_MS,
  RATE_LIMIT_MAX: env.RATE_LIMIT_MAX,
  PINECONE_API_KEY: env.PINECONE_API_KEY,
  PINECONE_INDEX: env.PINECONE_INDEX,
  AI_GATEWAY_URL: env.AI_GATEWAY_URL,
  OPENROUTER_API_KEY: env.OPENROUTER_API_KEY,
  TAVILY_API_KEY: env.TAVILY_API_KEY,
  ADMIN_NAME: env.ADMIN_NAME,
  ADMIN_EMAIL: env.ADMIN_EMAIL,
  ADMIN_PASSWORD: env.ADMIN_PASSWORD,
  TRIGGER_SECRET_KEY: env.TRIGGER_SECRET_KEY,
  BLOG_RESEARCH_CACHE_ENABLED: env.BLOG_RESEARCH_CACHE_ENABLED,
  RESEND_API_KEY: env.RESEND_API_KEY,
};

export const isDev = config.NODE_ENV === "development";
export const isProd = config.NODE_ENV === "production";
