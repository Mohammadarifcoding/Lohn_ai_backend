import type { Response, NextFunction } from "express";
import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../config/auth.js";
import { UnauthorizedError, ForbiddenError } from "../utils/appError.js";
import type { AuthenticatedRequest, UserRole } from "../types/index.js";

/**
 * Middleware that verifies the user session via Better Auth.
 * Attaches `req.user` and `req.session` if authenticated.
 */
export async function authenticate(
  req: AuthenticatedRequest,
  _res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });

    if (!session) {
      throw new UnauthorizedError("Authentication required");
    }

    req.user = session.user as AuthenticatedRequest["user"];
    req.session = session.session as AuthenticatedRequest["session"];
    next();
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      next(error);
    } else {
      next(new UnauthorizedError("Invalid or expired session"));
    }
  }
}

/**
 * Middleware that checks if the authenticated user has one of the required roles.
 * Must be used AFTER the `authenticate` middleware.
 */
export function requireRole(...roles: UserRole[]) {
  return (
    req: AuthenticatedRequest,
    _res: Response,
    next: NextFunction
  ): void => {
    if (!req.user) {
      next(new UnauthorizedError("Authentication required"));
      return;
    }

    if (!roles.includes(req.user.role as UserRole)) {
      next(new ForbiddenError("Insufficient permissions"));
      return;
    }

    next();
  };
}
