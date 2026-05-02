import { Router, type Router as RouterType } from "express";
import { authenticate, requireRole } from "../../middleware/authenticate.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import {
  generateBlog,
  getGenerateStatus,
  polishDraft,
  retryGenerateRun,
  selectDraftForRun,
  translateBlog,
  translateBlogInBackground,
} from "./blog.controller.js";

const router: RouterType = Router();

/**
 * @swagger
 * /api/admin/blog/generate:
 *   post:
 *     summary: Start blog generation workflow (admin only)
 *     tags: [Admin Blog]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - topic
 *               - goal
 *               - audience
 *             properties:
 *               topic:
 *                 type: string
 *               goal:
 *                 type: string
 *               audience:
 *                 type: string
 *               user_context:
 *                 type: string
 *               tone:
 *                 type: string
 *                 enum: [professional, casual, persuasive]
 *               keywords:
 *                 type: array
 *                 items:
 *                   type: string
 *               include_services:
 *                 type: array
 *                 items:
 *                   type: string
 *               constraints:
 *                 type: array
 *                 items:
 *                   type: string
 *               depth:
 *                 type: string
 *                 enum: [short, medium, long]
 *     responses:
 *       202:
 *         description: Workflow accepted and started
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.post(
  "/generate",
  authenticate,
  requireRole("admin"),
  asyncHandler(generateBlog),
);

/**
 * @swagger
 * /api/admin/blog/generate/{requestId}/status:
 *   get:
 *     summary: Get blog generation run status (admin only)
 *     tags: [Admin Blog]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: requestId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Run status retrieved
 *       404:
 *         description: Run not found
 */
router.get(
  "/generate/:requestId/status",
  authenticate,
  requireRole("admin"),
  asyncHandler(getGenerateStatus),
);

router.post(
  "/generate/:requestId/select-draft",
  authenticate,
  requireRole("admin"),
  asyncHandler(selectDraftForRun),
);

router.post(
  "/generate/:requestId/retry",
  authenticate,
  requireRole("admin"),
  asyncHandler(retryGenerateRun),
);

/**
 * @swagger
 * /api/admin/blog/polish-draft:
 *   post:
 *     summary: Run final language polish on provided draft content (admin only)
 *     tags: [Admin Blog]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *             properties:
 *               content:
 *                 type: string
 *               strictStructure:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Draft polish completed
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.post(
  "/polish-draft",
  authenticate,
  requireRole("admin"),
  asyncHandler(polishDraft),
);

router.post(
  "/translate",
  authenticate,
  requireRole("admin"),
  asyncHandler(translateBlog),
);

router.post(
  "/translate-background",
  authenticate,
  requireRole("admin"),
  asyncHandler(translateBlogInBackground),
);

export default router;
