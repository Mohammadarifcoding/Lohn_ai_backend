import { existsSync } from "node:fs";
import path from "node:path";
import dotenv from "dotenv";
import { fileURLToPath } from "node:url";
import { z } from "zod";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "../../");

const NODE_ENV_VALUES = ["development", "production"] as const;
const EnvironmentNameSchema = z.enum(NODE_ENV_VALUES);

function parseBoolean(value: unknown): boolean | undefined {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value !== "string") {
    return undefined;
  }

  const normalized = value.trim().toLowerCase();
  if (["1", "true", "yes", "on"].includes(normalized)) {
    return true;
  }
  if (["0", "false", "no", "off"].includes(normalized)) {
    return false;
  }

  return undefined;
}

const EnvSchema = z.object({
  NODE_ENV: EnvironmentNameSchema,
  PORT: z.coerce.number().int().positive().default(3000),
  DATABASE_URL: z.string().trim().min(1, "DATABASE_URL is required"),
  BETTER_AUTH_SECRET: z.string().trim().min(1, "BETTER_AUTH_SECRET is required"),
  BETTER_AUTH_URL: z.url(),
  CORS_ORIGIN: z.url().default("http://localhost:3000"),
  RATE_LIMIT_WINDOW_MS: z.coerce.number().int().positive().default(900000),
  RATE_LIMIT_MAX: z.coerce.number().int().positive().default(100),
  PINECONE_API_KEY: z.string().trim().min(1, "PINECONE_API_KEY is required"),
  PINECONE_INDEX: z.string().trim().min(1, "PINECONE_INDEX is required"),
  AI_GATEWAY_URL: z.url(),
  OPENROUTER_API_KEY: z.string().trim().min(1, "OPENROUTER_API_KEY is required"),
  TAVILY_API_KEY: z.string().trim().min(1, "TAVILY_API_KEY is required"),
  ADMIN_NAME: z.string().trim().min(1).default("Admin User"),
  ADMIN_EMAIL: z.email().default("admin@local.dev"),
  ADMIN_PASSWORD: z.string().trim().min(1).default("Admin@12345678"),
  TRIGGER_SECRET_KEY: z.string().trim().min(1).optional(),
  TRIGGER_PROJECT_REF: z.string().trim().min(1).optional(),
  TRIGGER_USE_QUEUE: z.preprocess(parseBoolean, z.boolean().default(false)),
  BLOG_RESEARCH_CACHE_ENABLED: z.preprocess(parseBoolean, z.boolean().default(false)),
  ANALYTICS_SALT: z.string().trim().min(32, "ANALYTICS_SALT must be at least 32 characters"),
  UPSTASH_REDIS_REST_URL: z.string().trim().url().optional(),
  UPSTASH_REDIS_REST_TOKEN: z.string().trim().min(1).optional(),
  RESEND_API_KEY: z.string().trim().min(1, "RESEND_API_KEY is required"),
  SENTRY_DSN: z.string().trim().url().optional(),
}).superRefine((env, ctx) => {
  if (env.NODE_ENV !== "production") {
    return;
  }

  if (!env.UPSTASH_REDIS_REST_URL) {
    ctx.addIssue({
      code: "custom",
      path: ["UPSTASH_REDIS_REST_URL"],
      message: "UPSTASH_REDIS_REST_URL is required in production",
    });
  }

  if (!env.UPSTASH_REDIS_REST_TOKEN) {
    ctx.addIssue({
      code: "custom",
      path: ["UPSTASH_REDIS_REST_TOKEN"],
      message: "UPSTASH_REDIS_REST_TOKEN is required in production",
    });
  }
});

export type ValidatedEnv = z.infer<typeof EnvSchema>;

function resolveRequestedEnvironment(): z.infer<typeof EnvironmentNameSchema> {
  const raw = process.env.NODE_ENV;
  if (raw === undefined || raw === "") {
    return "development";
  }

  const parsed = EnvironmentNameSchema.safeParse(raw);
  if (parsed.success) {
    return parsed.data;
  }

  throw new Error(
    `Invalid NODE_ENV \"${raw}\". Expected one of: ${NODE_ENV_VALUES.join(", ")}`,
  );
}

function getExpectedEnvPath(environment: z.infer<typeof EnvironmentNameSchema>): string {
  return path.resolve(
    projectRoot,
    environment === "production" ? ".env.production.local" : ".env.local",
  );
}

function hasInjectedRuntimeEnv(): boolean {
  const signals = [
    process.env.DATABASE_URL,
    process.env.BETTER_AUTH_SECRET,
    process.env.OPENROUTER_API_KEY,
    process.env.AI_GATEWAY_URL,
    process.env.TAVILY_API_KEY,
  ];

  return signals.some((value) => typeof value === "string" && value.trim().length > 0);
}

function shouldSkipFileLoading(environment: z.infer<typeof EnvironmentNameSchema>): boolean {
  return (
    environment === "production" &&
    (
      process.env.VERCEL === "1" ||
      process.env.VERCEL === "true" ||
      hasInjectedRuntimeEnv()
    )
  );
}

function loadEnvironmentFile(environment: z.infer<typeof EnvironmentNameSchema>): string | undefined {
  if (shouldSkipFileLoading(environment)) {
    return undefined;
  }

  const envPath = getExpectedEnvPath(environment);
  if (!existsSync(envPath)) {
    throw new Error(
      `Missing environment file for NODE_ENV=${environment}: ${path.basename(envPath)}`,
    );
  }

  dotenv.config({ path: envPath, override: true, quiet: true });
  return envPath;
}

function formatValidationError(
  error: z.ZodError<ValidatedEnv>,
  environment: z.infer<typeof EnvironmentNameSchema>,
  envPath: string | undefined,
): string {
  const expectedSource = envPath
    ? path.basename(envPath)
    : "runtime environment variables";
  const issues = error.issues.map((issue) => {
    const key = issue.path.join(".") || "root";
    return `- ${key}: ${issue.message}`;
  });

  return [
    "Environment validation failed.",
    `NODE_ENV=${environment}`,
    `Expected env source: ${expectedSource}`,
    ...issues,
  ].join("\n");
}

export function validateEnvironment(): {
  env: ValidatedEnv;
  environment: z.infer<typeof EnvironmentNameSchema>;
  envPath?: string;
} {
  const environment = resolveRequestedEnvironment();
  const envPath = loadEnvironmentFile(environment);
  const parsed = EnvSchema.safeParse(process.env);

  if (!parsed.success) {
    throw new Error(formatValidationError(parsed.error, environment, envPath));
  }

  if (parsed.data.NODE_ENV !== environment) {
    throw new Error(
      [
        "Environment validation failed.",
        `Requested NODE_ENV=${environment}`,
        `Loaded NODE_ENV=${parsed.data.NODE_ENV}`,
        `Expected env source: ${envPath ? path.basename(envPath) : "runtime environment variables"}`,
        "The selected env file does not match the active NODE_ENV.",
      ].join("\n"),
    );
  }

  return {
    env: parsed.data,
    environment,
    envPath,
  };
}
