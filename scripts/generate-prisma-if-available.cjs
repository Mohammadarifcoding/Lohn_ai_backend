const { existsSync } = require("node:fs");
const { spawnSync } = require("node:child_process");
const path = require("node:path");

const schemaPath = path.resolve(__dirname, "../../lohnai-website/prisma/schema.prisma");
const generatedClientPath = path.resolve(__dirname, "../src/generated/prisma/index.js");

if (!existsSync(schemaPath)) {
  if (!existsSync(generatedClientPath)) {
    console.error(
      "Unified Prisma schema is unavailable and generated client is missing. Run pnpm db:generate locally before deploying.",
    );
    process.exit(1);
  }

  console.log("Unified Prisma schema unavailable; using existing generated Prisma client.");
  process.exit(0);
}

const result = spawnSync(
  "prisma",
  ["generate", "--schema", schemaPath],
  {
    stdio: "inherit",
    shell: process.platform === "win32",
  },
);

process.exit(result.status ?? 1);
