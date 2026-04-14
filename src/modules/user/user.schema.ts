import { z } from "zod";

export const updateUserSchema = z.object({
  name: z.string().min(1, "Name is required").max(100).optional(),
  image: z.string().url("Invalid image URL").optional().nullable(),
});

export const getUserParamsSchema = z.object({
  id: z.string().min(1, "User ID is required"),
});

export type UpdateUserInput = z.infer<typeof updateUserSchema>;
