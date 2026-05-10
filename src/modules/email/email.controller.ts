import type { Request, Response } from "express";
import { enqueueSendEmailTask } from "../../trigger/enqueue.js";
import { logger } from "../../utils/logger.js";

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function submitContact(req: Request, res: Response): Promise<void> {
  const body = req.body as Record<string, unknown>;

  const name = body.name;
  const firma = body.firma;
  const email = body.email;
  const nachricht = body.nachricht;

  if (!isNonEmptyString(name) || !isNonEmptyString(firma) || !isNonEmptyString(email) || !isNonEmptyString(nachricht)) {
    res.status(400).json({ ok: false, error: "Missing required fields" });
    return;
  }

  const result = await enqueueSendEmailTask({
    type: "contact",
    data: {
      name: name.trim(),
      firma: firma.trim(),
      email: email.trim(),
      anliegen: typeof body.anliegen === "string" ? body.anliegen.trim() : "",
      nachricht: nachricht.trim(),
    },
  });

  logger.info("Contact form email enqueued", { triggerRunId: result.triggerRunId });

  res.status(200).json({ ok: true, triggerRunId: result.triggerRunId });
}

export async function submitTaxAdvisor(req: Request, res: Response): Promise<void> {
  const body = req.body as Record<string, unknown>;

  const kanzleiname = body.kanzleiname;
  const ansprechpartner = body.ansprechpartner;
  const kammerNr = body.kammerNr;
  const email = body.email;

  if (!isNonEmptyString(kanzleiname) || !isNonEmptyString(ansprechpartner) || !isNonEmptyString(kammerNr) || !isNonEmptyString(email)) {
    res.status(400).json({ ok: false, error: "Missing required fields" });
    return;
  }

  const result = await enqueueSendEmailTask({
    type: "tax-advisor",
    data: {
      kanzleiname: kanzleiname.trim(),
      ansprechpartner: ansprechpartner.trim(),
      strasse: typeof body.strasse === "string" ? body.strasse.trim() : undefined,
      plz: typeof body.plz === "string" ? body.plz.trim() : undefined,
      ort: typeof body.ort === "string" ? body.ort.trim() : undefined,
      kammerNr: kammerNr.trim(),
      anzahlMandanten: typeof body.anzahlMandanten === "string" ? body.anzahlMandanten.trim() : undefined,
      anzahlMitarbeiter: typeof body.anzahlMitarbeiter === "string" ? body.anzahlMitarbeiter.trim() : undefined,
      email: email.trim(),
      telefon: typeof body.telefon === "string" ? body.telefon.trim() : undefined,
    },
  });

  logger.info("Tax advisor form email enqueued", { triggerRunId: result.triggerRunId });

  res.status(200).json({ ok: true, triggerRunId: result.triggerRunId });
}
