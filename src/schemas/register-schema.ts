import { z } from "zod";

export const RegisterSchema = z.object({
  username: z.string().nonempty("Username is required"),
  email: z
    .string()
    .nonempty("Email is required")
    .email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});
