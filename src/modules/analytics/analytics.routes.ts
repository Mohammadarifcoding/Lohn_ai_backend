import { Router, type Router as RouterType } from "express";
import { trackPageView, trackAvatarUsage } from "./analytics.controller.js";

const router: RouterType = Router();

router.post("/page-view", trackPageView);
router.post("/avatar", trackAvatarUsage);

export default router;
