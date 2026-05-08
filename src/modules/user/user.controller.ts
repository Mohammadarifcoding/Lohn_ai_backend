import type { Response, NextFunction } from "express";
import { userService } from "./user.service.js";
import { sendSuccess } from "../../utils/apiResponse.js";
import { BadRequestError } from "../../utils/appError.js";
import type { AuthenticatedRequest } from "../../types/index.js";

/**
 * Safely extract a string param from Express v5 params (which can be string | string[]).
 */
function getParam(param: string | string[] | undefined): string {
  if (Array.isArray(param)) return param[0];
  if (!param) throw new BadRequestError("Missing required parameter");
  return param;
}

/**
 * GET /api/users/me
 * Get the currently authenticated user's profile.
 */
export async function getMe(
  req: AuthenticatedRequest,
  res: Response,
  _next: NextFunction
): Promise<void> {
  const user = await userService.getUserById(req.user!.id);
  sendSuccess(res, user, "Profile retrieved successfully");
}

/**
 * GET /api/users/:id
 * Get a user by ID (admin only).
 */
export async function getUserById(
  req: AuthenticatedRequest,
  res: Response,
  _next: NextFunction
): Promise<void> {
  const id = getParam(req.params.id);
  const user = await userService.getUserById(id);
  sendSuccess(res, user, "User retrieved successfully");
}

/**
 * PUT /api/users/:id
 * Update a user profile (admin only).
 */
export async function updateUser(
  req: AuthenticatedRequest,
  res: Response,
  _next: NextFunction
): Promise<void> {
  const id = getParam(req.params.id);
  const user = await userService.updateUser(id, req.body);
  sendSuccess(res, user, "User updated successfully");
}

/**
 * DELETE /api/users/:id
 * Delete a user (admin only).
 */
export async function deleteUser(
  req: AuthenticatedRequest,
  res: Response,
  _next: NextFunction
): Promise<void> {
  const id = getParam(req.params.id);
  await userService.deleteUser(id);
  sendSuccess(res, null, "User deleted successfully");
}

/**
 * GET /api/users
 * List all users with pagination (admin only).
 */
export async function getAllUsers(
  req: AuthenticatedRequest,
  res: Response,
  _next: NextFunction
): Promise<void> {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const result = await userService.getAllUsers(page, limit);
  sendSuccess(res, result, "Users retrieved successfully");
}
