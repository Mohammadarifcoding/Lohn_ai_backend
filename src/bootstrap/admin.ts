import { prisma } from "../config/database.js";
import { auth } from "../config/auth.js";
import { config } from "../config/index.js";
import { logger } from "../utils/logger.js";

export async function bootstrapAdminAccount(): Promise<void> {
  const userCount = await prisma.user.count();

  if (userCount > 0) {
    logger.info("Admin bootstrap skipped because users already exist");
    return;
  }

  const email = config.ADMIN_EMAIL.trim().toLowerCase();

  await auth.api.signUpEmail({
    body: {
      name: config.ADMIN_NAME,
      email,
      password: config.ADMIN_PASSWORD,
    },
  });

  await prisma.user.update({
    where: { email },
    data: { role: "admin" },
  });

  logger.info("Bootstrap admin account created", { email });
}
