import { Router, type Router as RouterType } from "express";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { authenticate, requireRole } from "../../middleware/authenticate.js";

const router: RouterType = Router();

/**
 * @swagger
 * /api/testing/error:
 *   post:
 *     summary: Intentionally throw a server-side error (admin only, for Sentry testing)
 *     tags: [Testing]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       500:
 *         description: Intentional server error for Sentry testing
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.post(
  "/error",
  authenticate,
  requireRole("admin"),
  asyncHandler(async () => {
    // Intentionally throw an error to test Sentry server-side capture
    throw new Error("[Sentry Test] Backend /api/testing/error triggered — intentional server-side error");
  }),
);

export default router;
