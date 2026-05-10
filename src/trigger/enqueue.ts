import { tasks } from "@trigger.dev/sdk/v3";
import { config } from "../config/index.js";
import { logger } from "../utils/logger.js";
import type { BlogGenerateTaskPayload } from "./blog-generate.task.js";
import type { BlogTranslateTaskPayload } from "./blog-translate.task.js";
import type { SendEmailPayload } from "./send-email.task.js";

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

export async function enqueueSendEmailTask(payload: SendEmailPayload): Promise<{
  triggerRunId?: string;
}> {
  const shouldQueue =
    process.env.NODE_ENV === "production" ||
    process.env.TRIGGER_USE_QUEUE === "true";

  logger.info("enqueueSendEmailTask check", {
    shouldQueue,
    nodeEnv: process.env.NODE_ENV,
    triggerUseQueue: process.env.TRIGGER_USE_QUEUE,
    hasSecretKey: !!config.TRIGGER_SECRET_KEY,
  });

  if (!shouldQueue) {
    logger.warn("enqueueSendEmailTask skipped: shouldQueue=false");
    return {};
  }

  if (!config.TRIGGER_SECRET_KEY) {
    logger.warn("enqueueSendEmailTask skipped: missing TRIGGER_SECRET_KEY");
    return {};
  }

  const handle = await tasks.trigger("send-email", payload);

  logger.info("enqueueSendEmailTask triggered", { runId: handle.id });

  return {
    triggerRunId: handle.id,
  };
}
