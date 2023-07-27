import { z } from "zod";

export const ConceptSchema = z.object({
  note: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: "Expected number, received a string",
  }),
  startDate: z.string().refine((val) => !(val instanceof Date), {
    message: "Expected number, received a string",
  }),
  endDate: z.string().refine((val) => !(val instanceof Date), {
    message: "Expected number, received a string",
  }),
});
