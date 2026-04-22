import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import dotenv from "dotenv";
import { configure, envvars } from "@trigger.dev/sdk";

type TriggerEnvironment = "dev" | "prod";
type SyncMode = TriggerEnvironment | "all";

interface ParsedEnvFile {
  filePath: string;
  vars: Record<string, string>;
  triggerSecretKey?: string;
  triggerProjectRef?: string;
}

const EXCLUDED_KEYS = new Set(["TRIGGER_SECRET_KEY", "TRIGGER_PROJECT_REF"]);

function normalizeMode(rawMode: string | undefined): SyncMode {
  const mode = (rawMode ?? "all").toLowerCase();
  if (mode === "dev" || mode === "prod" || mode === "all") {
    return mode;
  }

  throw new Error(`Unsupported mode "${rawMode}". Use one of: dev, prod, all`);
}

function parseEnvFile(filePath: string): ParsedEnvFile {
  if (!existsSync(filePath)) {
    throw new Error(`Env file not found: ${filePath}`);
  }

  const raw = readFileSync(filePath, "utf8");
  const parsed = dotenv.parse(raw);
  const vars: Record<string, string> = {};

  for (const [key, value] of Object.entries(parsed)) {
    if (value === undefined) {
      continue;
    }

    vars[key] = value;
  }

  return {
    filePath,
    vars,
    triggerSecretKey: vars.TRIGGER_SECRET_KEY,
    triggerProjectRef: vars.TRIGGER_PROJECT_REF,
  };
}

function buildUploadVariables(vars: Record<string, string>): Array<{ name: string; value: string }> {
  const uploadVars: Array<{ name: string; value: string }> = [];

  for (const [name, value] of Object.entries(vars)) {
    if (EXCLUDED_KEYS.has(name)) {
      continue;
    }

    uploadVars.push({ name, value });
  }

  return uploadVars;
}

async function uploadEnv(params: {
  projectRef: string;
  env: TriggerEnvironment;
  accessToken: string;
  variables: Record<string, string>;
}): Promise<void> {
  configure({
    accessToken: params.accessToken,
  });

  await envvars.upload(params.projectRef, params.env, {
    variables: params.variables,
    override: true,
  });
}

async function syncEnvironment(params: {
  parsedEnv: ParsedEnvFile;
  env: TriggerEnvironment;
  projectRef: string;
  accessToken: string;
}): Promise<void> {
  const variables = buildUploadVariables(params.parsedEnv.vars);

  if (variables.length === 0) {
    throw new Error(`No variables found to upload from ${params.parsedEnv.filePath}`);
  }

  await uploadEnv({
    projectRef: params.projectRef,
    env: params.env,
    accessToken: params.accessToken,
    variables: Object.fromEntries(variables.map((entry) => [entry.name, entry.value])),
  });

  console.log(
    `[trigger-sync-env] Uploaded ${variables.length} vars to ${params.env} from ${path.basename(params.parsedEnv.filePath)}`,
  );
}

async function main(): Promise<void> {
  const mode = normalizeMode(process.argv[2]);
  const root = process.cwd();

  if (mode === "all") {
    const devRun = spawnSync("pnpm", ["tsx", "scripts/trigger-sync-env.ts", "dev"], {
      cwd: root,
      stdio: "inherit",
      shell: true,
      env: process.env,
    });

    if ((devRun.status ?? 1) !== 0) {
      throw new Error("Dev env sync failed while running all mode");
    }

    const prodRun = spawnSync("pnpm", ["tsx", "scripts/trigger-sync-env.ts", "prod"], {
      cwd: root,
      stdio: "inherit",
      shell: true,
      env: process.env,
    });

    if ((prodRun.status ?? 1) !== 0) {
      throw new Error("Prod env sync failed while running all mode");
    }

    console.log("[trigger-sync-env] Completed mode: all");
    return;
  }

  const devEnv = parseEnvFile(path.resolve(root, ".env.development"));
  const prodEnv = parseEnvFile(path.resolve(root, ".env.production"));

  const projectRef =
    process.env.TRIGGER_PROJECT_REF ||
    devEnv.triggerProjectRef ||
    prodEnv.triggerProjectRef;

  if (!projectRef) {
    throw new Error(
      "Missing TRIGGER_PROJECT_REF. Add it to .env.development/.env.production or shell env.",
    );
  }

  if (mode === "dev") {
    const devToken = process.env.TRIGGER_DEV_KEY || devEnv.triggerSecretKey;
    if (!devToken) {
      throw new Error(
        "Missing dev Trigger key. Set TRIGGER_DEV_KEY or TRIGGER_SECRET_KEY in .env.development.",
      );
    }

    await syncEnvironment({
      parsedEnv: devEnv,
      env: "dev",
      projectRef,
      accessToken: devToken,
    });
  }

  if (mode === "prod") {
    const prodToken = process.env.TRIGGER_PROD_KEY || prodEnv.triggerSecretKey;
    if (!prodToken) {
      throw new Error(
        "Missing prod Trigger key. Set TRIGGER_PROD_KEY or TRIGGER_SECRET_KEY in .env.production.",
      );
    }

    await syncEnvironment({
      parsedEnv: prodEnv,
      env: "prod",
      projectRef,
      accessToken: prodToken,
    });
  }

  console.log(`[trigger-sync-env] Completed mode: ${mode}`);
}

main().catch((error) => {
  console.error(
    `[trigger-sync-env] ${error instanceof Error ? error.message : "Unknown error"}`,
  );
  process.exit(1);
});
