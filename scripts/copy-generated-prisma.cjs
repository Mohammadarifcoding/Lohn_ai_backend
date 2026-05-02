const { cpSync, existsSync, rmSync } = require("node:fs");
const path = require("node:path");

const source = path.resolve(__dirname, "../src/generated/prisma");
const destination = path.resolve(__dirname, "../dist/generated/prisma");

if (!existsSync(source)) {
  console.error("Generated Prisma client is missing. Run pnpm db:generate first.");
  process.exit(1);
}

rmSync(destination, { recursive: true, force: true });
cpSync(source, destination, { recursive: true });

console.log("Copied generated Prisma client into dist.");
