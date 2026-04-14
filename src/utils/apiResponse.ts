import type { Response } from "express";

interface SuccessResponse<T> {
  success: true;
  data: T;
  message: string;
}

interface ErrorResponse {
  success: false;
  message: string;
  errors?: Array<{ field?: string; message: string }>;
}

export function sendSuccess<T>(
  res: Response,
  data: T,
  message = "Success",
  statusCode = 200
): void {
  const response: SuccessResponse<T> = {
    success: true,
    data,
    message,
  };
  res.status(statusCode).json(response);
}

export function sendError(
  res: Response,
  message = "Internal server error",
  statusCode = 500,
  errors?: Array<{ field?: string; message: string }>
): void {
  const response: ErrorResponse = {
    success: false,
    message,
    ...(errors && { errors }),
  };
  res.status(statusCode).json(response);
}
