import path from "node:path";
import { validateEnvironment } from "../src/config/env.js";

const result = validateEnvironment();

console.log(
  [
    "[env:check] Environment validation passed",
    `[env:check] NODE_ENV=${result.environment}`,
    `[env:check] Source=${result.envPath ? path.basename(result.envPath) : "runtime environment variables (Vercel production)"}`,
  ].join("\n"),
);
