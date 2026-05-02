import { tasks } from "@trigger.dev/sdk/v3";
import { config } from "../config/index.js";
import type { BlogGenerateTaskPayload } from "./blog-generate.task.js";
import type { BlogTranslateTaskPayload } from "./blog-translate.task.js";

export async function enqueueBlogGenerateTask(payload: BlogGenerateTaskPayload): Promise<{
  triggerRunId?: string;
}> {
  const shouldQueue =
    process.env.NODE_ENV === "production" ||
    process.env.TRIGGER_USE_QUEUE === "true";

  if (!shouldQueue) {
    return {};
  }

  if (!config.TRIGGER_SECRET_KEY) {
    return {};
  }

  const handle = await tasks.trigger("blog-generate", payload);

  return {
    triggerRunId: handle.id,
  };
}

export async function enqueueBlogTranslateTask(payload: BlogTranslateTaskPayload): Promise<{
  triggerRunId?: string;
}> {
  const shouldQueue =
    process.env.NODE_ENV === "production" ||
    process.env.TRIGGER_USE_QUEUE === "true";

  if (!shouldQueue) {
    return {};
  }

  if (!config.TRIGGER_SECRET_KEY) {
    return {};
  }

  const handle = await tasks.trigger("blog-translate", payload);

  return {
    triggerRunId: handle.id,
  };
}
