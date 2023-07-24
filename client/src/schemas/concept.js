import { z } from "zod";

export const conceptSchema = z.object({
  note: z.number({
    required_error: "note is required",
    invalid_type_error: "note must be a number",
  }),
  startDate: z.date(),
  endDate: z.date(),
});
