import mongoose from "mongoose";

const docenteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    dni: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },

    gobalConcepts: {
      type: [
        {
          year: { type: Number, required: true, unique: true },
          subjects: [
            {
              name: { type: String, required: true },
              generalConcept: { type: String },
              concepts: [
                {
                  id: { type: Number, required: true, unique: true },
                  note: { type: Number, required: true, trim: true },
                  startDate: { type: Date, required: true, trim: true },
                  endDate: { type: Date, required: true, trim: true },
                  diffDates: { type: Number, required: true, trim: true },
                  sanitizedNote: { type: Number, required: true, trim: true },
                  concept: { type: Number, required: true, trim: true },
                },
              ],
            },
          ],
        },
      ],
    },

    createdBy: {
      required: true,
      type: mongoose.Types.ObjectId,
      ref: "User",
    },

    updatedBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    versionkey: false,
  }
);

export default mongoose.model("Docente", docenteSchema);
