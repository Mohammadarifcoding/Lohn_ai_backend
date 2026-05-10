import { Router, type Router as RouterType } from "express";
import { submitContact, submitTaxAdvisor } from "./email.controller.js";

const router: RouterType = Router();

router.post("/contact", submitContact);
router.post("/tax-advisor", submitTaxAdvisor);

export default router;
