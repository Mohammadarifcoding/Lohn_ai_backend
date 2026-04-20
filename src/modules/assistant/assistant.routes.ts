import { Router, type Router as RouterType } from "express";
import { asyncHandler } from "../../utils/asyncHandler.js";
import {
  answerDeepPayroll,
  classifyDeepSearchNeed,
} from "./assistant.controller.js";

const router: RouterType = Router();

router.post("/classify", asyncHandler(classifyDeepSearchNeed));
router.post("/deep-payroll-answer", asyncHandler(answerDeepPayroll));

export default router;
