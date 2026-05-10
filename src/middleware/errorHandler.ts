import type { Request, Response, NextFunction } from "express";
import * as Sentry from "@sentry/node";
import { AppError } from "../utils/appError.js";
import { logger } from "../utils/logger.js";
import { sendError } from "../utils/apiResponse.js";

function isPrismaKnownRequestError(err: Error): boolean {
  return err.constructor.name === "PrismaClientKnownRequestError";
}

function shouldReportToSentry(err: Error): boolean {
  if (err instanceof AppError) {
    return err.reportToSentry;
  }

  if (isPrismaKnownRequestError(err)) {
    const prismaErr = err as unknown as { code: string };
    return prismaErr.code !== "P2002" && prismaErr.code !== "P2025";
  }

  return true;
}

async function reportToSentry(err: Error, req: Request): Promise<void> {
  Sentry.withScope((scope) => {
    scope.setContext("request", {
      method: req.method,
      url: req.originalUrl,
      ip: req.ip,
      userAgent: req.get("User-Agent"),
    });

    if (err instanceof AppError) {
      scope.setTag("http.status_code", String(err.statusCode));
      scope.setTag("app_error", "true");
    }

    Sentry.captureException(err);
  });

  if (process.env.VERCEL || process.env.NODE_ENV === "production") {
    await Sentry.flush(2000);
  }
}

export async function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
): Promise<void> {
  if (shouldReportToSentry(err)) {
    await reportToSentry(err, req);
  }

  if (err instanceof AppError) {
    logger.warn(`AppError: ${err.message}`, {
      statusCode: err.statusCode,
      stack: err.stack,
    });
    sendError(res, err.message, err.statusCode);
    return;
  }

  // Prisma known request errors
  if (isPrismaKnownRequestError(err)) {
    const prismaErr = err as unknown as { code: string; meta?: Record<string, unknown> };
    switch (prismaErr.code) {
      case "P2002":
        sendError(res, "A record with that value already exists", 409);
        return;
      case "P2025":
        sendError(res, "Record not found", 404);
        return;
      default:
        sendError(res, "Database error", 400);
        return;
    }
  }

  logger.error("Unhandled error:", {
    message: err.message,
    stack: err.stack,
  });

  const message =
    process.env.NODE_ENV === "production"
      ? "Internal server error"
      : err.message;

  sendError(res, message, 500);
}
