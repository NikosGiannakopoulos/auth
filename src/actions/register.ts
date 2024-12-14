"use server";

import { z } from "zod";
import { RegisterSchema } from "@/schemas/register-schema";

export const Register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields) {
    return {
      error: "Registration failed. Please check your inputs and try again.",
    };
  }

  return { success: "You have successfully registered! Welcome aboard." };
};
