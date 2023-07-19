import { z } from "zod";


// note: {type: Number, required: true, trim: true},
// startDate: {type: Date, required: true, trim: true},
// endDate: {type: Date, required: true, trim: true},



// sanitizedNote: {type: Number, required: true, trim: true}



export const ConceptSchema = z.object({
  note: z.string({
    required_error: "Note is required",
  }),
  startDate: z.date({
    required_error: "startDate is required",
  }),
  endDate: z.date({
    required_error: "endDate is required",
  })
});

