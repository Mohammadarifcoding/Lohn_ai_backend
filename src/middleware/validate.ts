import type { Request, Response, NextFunction } from "express";
import type { ZodSchema } from "zod";
import { sendError } from "../utils/apiResponse.js";

interface ValidationSchemas {
  body?: ZodSchema;
  params?: ZodSchema;
  query?: ZodSchema;
}

/**
 * Middleware that validates request body, params, and/or query
 * against Zod schemas.
 */
export function validate(schemas: ValidationSchemas) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const errors: Array<{ field: string; message: string }> = [];

    if (schemas.body) {
      const result = schemas.body.safeParse(req.body);
      if (!result.success) {
        for (const issue of result.error.issues) {
          errors.push({
            field: issue.path.join("."),
            message: issue.message,
          });
        }
      } else {
        req.body = result.data;
      }
    }

    if (schemas.params) {
      const result = schemas.params.safeParse(req.params);
      if (!result.success) {
        for (const issue of result.error.issues) {
          errors.push({
            field: issue.path.join("."),
            message: issue.message,
          });
        }
      }
    }

    if (schemas.query) {
      const result = schemas.query.safeParse(req.query);
      if (!result.success) {
        for (const issue of result.error.issues) {
          errors.push({
            field: issue.path.join("."),
            message: issue.message,
          });
        }
      }
    }

    if (errors.length > 0) {
      sendError(res, "Validation failed", 400, errors);
      return;
    }

    next();
  };
}
