"use server";

import { z } from "zod";
import { LoginSchema } from "@/schemas/login-schema";

export const Login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields) {
    return {
      error:
        "Login failed. Please check your email and password, then try again.",
    };
  }

  return { success: "Welcome back! You have successfully logged in." };
};
