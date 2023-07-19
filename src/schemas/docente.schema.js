import { z } from "zod";

export const createDocenteSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  lastname: z.string({
    required_error: "Lastname is required",
  }),
  dni: z
    .string({
      required_error: "dni is required",
    })
    .min(8, {
      message: "dni must be at least 8 numbers",
    }),
});

export const updateDocenteSchema = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  lastname: z.string({
    required_error: "Lastname is required",
  }),
  dni: z
    .string({
      required_error: "dni is required",
    })
    .min(8, {
      message: "dni must be at least 8 numbers",
    }),
});
