import { task } from "@trigger.dev/sdk/v3";
import { logger } from "../utils/logger.js";
import { sendContactEmails, sendTaxAdvisorEmails } from "../modules/email/email.service.js";

export interface SendEmailPayload {
  type: "contact" | "tax-advisor";
  data: Record<string, string | boolean | undefined>;
}

export const sendEmailTask = task({
  id: "send-email",
  run: async (payload: SendEmailPayload) => {
    logger.info("Trigger job started for email sending", {
      type: payload.type,
    });

    if (payload.type === "contact") {
      await sendContactEmails(payload.data as unknown as Parameters<typeof sendContactEmails>[0]);
    } else {
      await sendTaxAdvisorEmails(payload.data as unknown as Parameters<typeof sendTaxAdvisorEmails>[0]);
    }

    logger.info("Trigger job completed for email sending", {
      type: payload.type,
    });
  },
});
