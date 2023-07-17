import { z } from "zod";

export const registerSchema = z.object({
  dni: z.string({
    required_error: "dni is required",
  }),
  name: z.string({
    required_error: "Name is required",
  }),
  lastname: z.string({
    required_error: "Lastname is required",
  }),
  username: z.string({
    required_error: "Username is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Email is not valid",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
});

export const loginSchema = z.object({
  username: z.string({
    required_error: "Username is required",
  }),
  password: z.string().min(6),
});
