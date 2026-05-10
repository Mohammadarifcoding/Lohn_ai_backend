import { Resend } from "resend";
import { config } from "../../config/index.js";

const resend = new Resend(config.RESEND_API_KEY);

const FROM_EMAIL = "LohnAI <mail@support.lohnai.com>";
const ADMIN_EMAIL = "info@lohnai.com";

interface ContactFormData {
  name: string;
  firma: string;
  email: string;
  anliegen: string;
  nachricht: string;
}

interface TaxAdvisorFormData {
  kanzleiname: string;
  ansprechpartner: string;
  strasse?: string;
  plz?: string;
  ort?: string;
  kammerNr: string;
  anzahlMandanten?: string;
  anzahlMitarbeiter?: string;
  email: string;
  telefon?: string;
}

function buildContactAdminHtml(data: ContactFormData): string {
  return `
    <h2>Neue Kontaktanfrage</h2>
    <table style="border-collapse:collapse;width:100%;">
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.name)}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Firma</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.firma)}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.email)}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Anliegen</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.anliegen || "–")}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Nachricht</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.nachricht).replace(/\n/g, "<br>")}</td></tr>
    </table>
  `;
}

function buildTaxAdvisorAdminHtml(data: TaxAdvisorFormData): string {
  return `
    <h2>Neue Steuerberater-Anfrage</h2>
    <table style="border-collapse:collapse;width:100%;">
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Kanzleiname</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.kanzleiname)}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Ansprechpartner</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.ansprechpartner)}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Straße</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.strasse || "–")}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">PLZ</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.plz || "–")}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Ort</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.ort || "–")}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Kammer-Nr.</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.kammerNr)}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Mandanten</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.anzahlMandanten || "–")}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Mitarbeiter</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.anzahlMitarbeiter || "–")}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.email)}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Telefon</td><td style="padding:8px;border:1px solid #ddd;">${escapeHtml(data.telefon || "–")}</td></tr>
    </table>
  `;
}

function buildAutoReplyHtml(name: string): string {
  return `
    <h2>Vielen Dank für Ihre Anfrage!</h2>
    <p>Hallo ${escapeHtml(name)},</p>
    <p>wir haben Ihre Nachricht erhalten und melden uns in Kürze bei Ihnen.</p>
    <p>Mit freundlichen Grüßen<br>Das LohnAI Team</p>
  `;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function sendEmail(args: { from: string; to: string; subject: string; html: string; replyTo?: string }): Promise<void> {
  const { data, error } = await resend.emails.send(args);
  if (error) {
    throw new Error(`Resend error (${error.statusCode}): ${error.message}`);
  }
  if (!data || !data.id) {
    throw new Error("Resend returned no email ID");
  }
}

export async function sendContactEmails(data: ContactFormData): Promise<void> {
  // Admin notification
  await sendEmail({
    from: FROM_EMAIL,
    to: ADMIN_EMAIL,
    replyTo: data.email,
    subject: `Neue Kontaktanfrage — ${data.name}`,
    html: buildContactAdminHtml(data),
  });

  // Auto-reply to user
  await sendEmail({
    from: FROM_EMAIL,
    to: data.email,
    subject: "Wir haben Ihre Anfrage erhalten",
    html: buildAutoReplyHtml(data.name),
  });
}

export async function sendTaxAdvisorEmails(data: TaxAdvisorFormData): Promise<void> {
  // Admin notification
  await sendEmail({
    from: FROM_EMAIL,
    to: ADMIN_EMAIL,
    replyTo: data.email,
    subject: `Neue Steuerberater-Anfrage — ${data.kanzleiname}`,
    html: buildTaxAdvisorAdminHtml(data),
  });

  // Auto-reply to user
  await sendEmail({
    from: FROM_EMAIL,
    to: data.email,
    subject: "Wir haben Ihre Anfrage erhalten",
    html: buildAutoReplyHtml(data.ansprechpartner),
  });
}
