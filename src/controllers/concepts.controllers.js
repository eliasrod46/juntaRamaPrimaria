import Docente from "../models/docente.model.js";
import { sanitizeNote, diffMoths } from "../libs/conceptsUtils.js";

export const getConcepts = async (req, res) => {
  try {
    const docente = await Docente.findById(req.params.did).populate("concepts");

    if (!docente === -1)
      return res.status(404).json({ message: "docente not found" });

    res.json(docente.concepts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteConcept = async (req, res) => {
  try {
    const docente = await Docente.findById(req.params.did).populate("concepts");
    if (!docente) return res.status(404).json(["Docente not found"]);

    const concepts = docente.concepts;

    const indexToDelete = concepts.findIndex(
      (concept) => concept._id == req.params.cid
    );

    if (indexToDelete === -1)
      return res.status(404).json({ message: "Concept not found" });

    concepts.splice(indexToDelete, 1);
    await Docente.updateOne({ _id: docente._id }, { concepts });
    res.status(201);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createConcept = async (req, res) => {
  try {
    const { note, startDate, endDate } = req.body;
    const docente = await Docente.findById(req.params.did).populate("concepts");
    if (!docente) return res.status(404).json(["Docente not found"]);

    // check note value;
    if (!Number(note) || Number(note) < 6 || Number(note) > 10) {
      return res
        .status(400)
        .json(["The note must be a number beetween 6 - 10"]);
    }
    // check dates values;
    if (
      new Date(startDate) == "Invalid Date" ||
      new Date(endDate) == "Invalid Date"
    ) {
      return res
        .status(400)
        .json(["The startDate and endDate must be a Date data"]);
    }

    //-- ckh not exceed 15 concepts
    if (docente.concepts.length == 15) {
      return res
        .status(404)
        .json([
          `You have reached the maximum number of concepts, please delete an existing concept`,
        ]);
    }

    //-- Calculate Sanitized note & worked moths
    const sanitizedNote = sanitizeNote(Number(note));
    let diffDates = diffMoths(startDate, endDate);

    //-- tunc 10.xx
    if (diffDates > 10) {
      diffDates = Math.trunc(diffDates);
    }

    //-- cal concept
    const concept = ((diffDates * sanitizedNote) / 10).toFixed(2);

    const concepts = docente.concepts;
    const id = concepts.length == 0 ? 1 : concepts[concepts.length - 1].id + 1;

    concepts.push({
      id,
      note,
      sanitizedNote,
      startDate,
      endDate,
      diffDates,
      concept,
    });

    const updatedDocente = await Docente.updateOne(
      { _id: docente._id },
      { concepts }
    );

    // calculate generalconcepto (calculated in forntend)
    // const test = concepts.reduce(
    //   (accumulator, concepts) => accumulator + concepts.concept,
    //   0
    // );
    // setGeneralConcept(test / 6);

    res.status(201);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
