import { z } from "zod";

export const docenteSchema = z.object({
  dni: z.string().min(8, {
    message: "DNI must be at least 8 numbers",
  }),
  name: z.string().min(4, {
    message: "Name must be at least 4 characters",
  }),
  lastname: z.string().min(4, {
    message: "Lastname must be at least 4 characters",
  }),
});