import { defineConfig } from "@trigger.dev/sdk";
import { prismaExtension } from "@trigger.dev/build/extensions/prisma";

export default defineConfig({
  project: process.env.TRIGGER_PROJECT_REF ?? "proj_trgpexxbcoitgplxygdv",
  dirs: ["./src/trigger"],
  tsconfig: "./tsconfig.json",
  maxDuration: 3600,
  build: {
    extensions: [
      prismaExtension({
        mode: "engine-only",
        version: "6.19.3",
        binaryTarget: "debian-openssl-3.0.x",
      }),
    ],
  },
});
