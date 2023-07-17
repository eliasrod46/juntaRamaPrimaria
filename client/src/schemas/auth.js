import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

export const registerSchema = z
  .object({
    name: z
      .string({
        required_error: "name is required",
      })
      .min(3, {
        message: "name must be at least 3 characters",
      }),
    lastname: z
      .string({
        required_error: "lastname is required",
      })
      .min(3, {
        message: "lastname must be at least 3 characters",
      }),
    dni: z
    .string({
      required_error: "dni is required",
    })
    .min(8, {
      message: "dni must be at least 8 numbers",
    }),
    username: z
      .string({
        required_error: "Username is required",
      })
      .min(3, {
        message: "Username must be at least 3 characters",
      }),
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
    confirmPassword: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
