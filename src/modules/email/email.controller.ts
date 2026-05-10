import type { Request, Response } from "express";
import { z } from "zod";
import { enqueueSendEmailTask } from "../../trigger/enqueue.js";
import { logger } from "../../utils/logger.js";

const honeypotFields = ["website", "companyWebsite", "url", "homepage"];

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  firma: z.string().trim().min(1).max(160),
  email: z.email().trim().max(254),
  anliegen: z.string().trim().max(160).optional().default(""),
  nachricht: z.string().trim().min(1).max(5000),
});

const TaxAdvisorSchema = z.object({
  kanzleiname: z.string().trim().min(1).max(180),
  ansprechpartner: z.string().trim().min(1).max(160),
  strasse: z.string().trim().max(200).optional(),
  plz: z.string().trim().max(20).optional(),
  ort: z.string().trim().max(120).optional(),
  kammerNr: z.string().trim().min(1).max(80),
  anzahlMandanten: z.string().trim().max(40).optional(),
  anzahlMitarbeiter: z.string().trim().max(40).optional(),
  email: z.email().trim().max(254),
  telefon: z.string().trim().max(40).optional(),
});

function isHoneypotFilled(body: Record<string, unknown>): boolean {
  return honeypotFields.some((field) => {
    const value = body[field];
    return typeof value === "string" && value.trim().length > 0;
  });
}

function respondValidationError(res: Response): void {
  res.status(400).json({ ok: false, error: "Invalid form submission" });
}

export async function submitContact(req: Request, res: Response): Promise<void> {
  const body = req.body as Record<string, unknown>;

  if (isHoneypotFilled(body)) {
    res.status(200).json({ ok: true });
    return;
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    respondValidationError(res);
    return;
  }

  const result = await enqueueSendEmailTask({
    type: "contact",
    data: {
      name: parsed.data.name,
      firma: parsed.data.firma,
      email: parsed.data.email,
      anliegen: parsed.data.anliegen,
      nachricht: parsed.data.nachricht,
    },
  });

  logger.info("Contact form email enqueued", { triggerRunId: result.triggerRunId });

  res.status(200).json({ ok: true, triggerRunId: result.triggerRunId });
}

export async function submitTaxAdvisor(req: Request, res: Response): Promise<void> {
  const body = req.body as Record<string, unknown>;

  if (isHoneypotFilled(body)) {
    res.status(200).json({ ok: true });
    return;
  }

  const parsed = TaxAdvisorSchema.safeParse(body);
  if (!parsed.success) {
    respondValidationError(res);
    return;
  }

  const result = await enqueueSendEmailTask({
    type: "tax-advisor",
    data: {
      kanzleiname: parsed.data.kanzleiname,
      ansprechpartner: parsed.data.ansprechpartner,
      strasse: parsed.data.strasse,
      plz: parsed.data.plz,
      ort: parsed.data.ort,
      kammerNr: parsed.data.kammerNr,
      anzahlMandanten: parsed.data.anzahlMandanten,
      anzahlMitarbeiter: parsed.data.anzahlMitarbeiter,
      email: parsed.data.email,
      telefon: parsed.data.telefon,
    },
  });

  logger.info("Tax advisor form email enqueued", { triggerRunId: result.triggerRunId });

  res.status(200).json({ ok: true, triggerRunId: result.triggerRunId });
}
