import { task } from "@trigger.dev/sdk/v3";
import { logger } from "../utils/logger.js";
import {
  markRunProcessing,
  touchRunHeartbeat,
} from "../modules/blog/blog.persistence.js";
import { runGenerateBlogInBackground } from "../modules/blog/blog.service.js";
import type { BlogInput } from "../types/blog/blog.js";

export interface BlogGenerateTaskPayload {
  requestId: string;
  userId?: string;
  input: BlogInput;
}

export async function runBlogGenerateTask(
  payload: BlogGenerateTaskPayload,
): Promise<void> {
  await markRunProcessing(payload.requestId);
  await touchRunHeartbeat(payload.requestId);
  await runGenerateBlogInBackground(payload.requestId, payload.input, payload.userId);
}

export const blogGenerateTask = task({
  id: "blog-generate",
  run: async (payload: BlogGenerateTaskPayload) => {
    logger.info("Trigger job started for blog generation", {
      requestId: payload.requestId,
    });
    await runBlogGenerateTask(payload);
  },
});
