import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "../../");
const runtimeEnv = process.env.NODE_ENV ?? "development";
const envSpecificPath = path.resolve(projectRoot, `.env.${runtimeEnv}`);
const defaultEnvPath = path.resolve(projectRoot, ".env");
const localEnvPath = path.resolve(projectRoot, ".env.local");

const isVercelRuntime = process.env.VERCEL === "1" || process.env.VERCEL === "true";
const isProductionRuntime = runtimeEnv === "production";

if (!(isVercelRuntime && isProductionRuntime)) {
  dotenv.config({ path: defaultEnvPath, quiet: true });
  dotenv.config({ path: envSpecificPath, quiet: true });
  dotenv.config({ path: localEnvPath, override: true, quiet: true });
}

interface Config {
  PORT: number;
  NODE_ENV: string;
  DATABASE_URL: string;
  BETTER_AUTH_SECRET: string;
  BETTER_AUTH_URL: string;
  RATE_LIMIT_WINDOW_MS: number;
  RATE_LIMIT_MAX: number;
  OPENAI_API_KEY: string;
  PINECONE_API_KEY: string;
  PINECONE_INDEX: string;
  GEMINI_API_KEY: string;
  AI_GATEWAY_URL: string;
  OPENROUTER_API_KEY: string;
  TAVILY_API_KEY: string;
  ADMIN_NAME: string;
  ADMIN_EMAIL: string;
  ADMIN_PASSWORD: string;
  TRIGGER_SECRET_KEY?: string;
  BLOG_RESEARCH_CACHE_ENABLED: boolean;
}

function getEnvVar(key: string, fallback?: string): string {
  const value = process.env[key] ?? fallback;
  if (value === undefined) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

function getOptionalEnvVar(key: string): string | undefined {
  const value = process.env[key];
  if (!value) {
    return undefined;
  }
  return value;
}

function getBooleanEnvVar(key: string, fallback = false): boolean {
  const value = process.env[key];
  if (!value) {
    return fallback;
  }

  return ["1", "true", "yes", "on"].includes(value.toLowerCase());
}

export const config: Config = {
  PORT: parseInt(getEnvVar("PORT", "3000"), 10),
  NODE_ENV: getEnvVar("NODE_ENV", "development"),
  DATABASE_URL: getEnvVar("DATABASE_URL"),
  BETTER_AUTH_SECRET: getEnvVar("BETTER_AUTH_SECRET"),
  BETTER_AUTH_URL: getEnvVar("BETTER_AUTH_URL", "http://localhost:3001"),
  RATE_LIMIT_WINDOW_MS: parseInt(
    getEnvVar("RATE_LIMIT_WINDOW_MS", "900000"),
    10,
  ),
  RATE_LIMIT_MAX: parseInt(getEnvVar("RATE_LIMIT_MAX", "100"), 10),
  OPENAI_API_KEY: getEnvVar("OPENAI_API_KEY"),
  PINECONE_API_KEY: getEnvVar("PINECONE_API_KEY"),
  PINECONE_INDEX: getEnvVar("PINECONE_INDEX"),
  AI_GATEWAY_URL: getEnvVar("AI_GATEWAY_URL"),
  OPENROUTER_API_KEY: getEnvVar("OPENROUTER_API_KEY"),
  TAVILY_API_KEY: getEnvVar("TAVILY_API_KEY"),
  GEMINI_API_KEY: getEnvVar("GEMINI_API_KEY"),
  ADMIN_NAME: getEnvVar("ADMIN_NAME", "Admin User"),
  ADMIN_EMAIL: getEnvVar("ADMIN_EMAIL", "admin@local.dev"),
  ADMIN_PASSWORD: getEnvVar("ADMIN_PASSWORD", "Admin@12345678"),
  TRIGGER_SECRET_KEY: getOptionalEnvVar("TRIGGER_SECRET_KEY"),
  BLOG_RESEARCH_CACHE_ENABLED: getBooleanEnvVar(
    "BLOG_RESEARCH_CACHE_ENABLED",
    false,
  ),
};

export const isDev = config.NODE_ENV === "development";
export const isProd = config.NODE_ENV === "production";
