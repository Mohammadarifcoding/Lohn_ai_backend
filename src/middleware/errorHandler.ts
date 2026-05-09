import type { Request, Response, NextFunction } from "express";
import * as Sentry from "@sentry/node";
import { AppError } from "../utils/appError.js";
import { logger } from "../utils/logger.js";
import { sendError } from "../utils/apiResponse.js";

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  if (err instanceof AppError) {
    logger.warn(`AppError: ${err.message}`, {
      statusCode: err.statusCode,
      stack: err.stack,
    });
    sendError(res, err.message, err.statusCode);
    return;
  }

  // Prisma known request errors
  if (err.constructor.name === "PrismaClientKnownRequestError") {
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

  // Unexpected errors
  Sentry.captureException(err);
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
