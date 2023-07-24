import Docente from "../models/docente.model.js";

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
    if (!docente) return res.status(404).json({ message: "Docente not found" });

    const concepts = docente.concepts;

    const indexToDelete = concepts.findIndex(
      (concept) => concept.id === req.params.cid
    );
    if (indexToDelete === -1)
      return res.status(404).json({ message: "Concept not found" });

    concepts.splice(indexToDelete, 1);
    docente.update({ concepts });

    return res.satus(201);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createConcept = async (req, res) => {
  try {
    const { note, startDate, endDate } = req.body;
    const docente = await Docente.findById(req.params.did).populate("concepts");
    if (!docente) return res.status(404).json({ message: "Docente not found" });

    // check note value;
    if (!Number(note) || Number(note) < 1 || Number(note) > 10) {
      return res.status(400).json({
        message: ["The note must be a number beetween 1 - 10"],
      });
    }
    // check dates values;
    if (!(startDate instanceof Date) || !(endDate instanceof Date)) {
      return res.status(400).json({
        message: ["The startDate and endDate must be a Date data"],
      });
    }

    if (docente.concepts.length == 15) {
      return res.status(404).json({
        message: `
          You have reached the maximum number of concepts, please delete or edit an existing concept`,
      });
    }

    const sanitizedNote = sanitize(Number(note));

    concepts = docente.concepts;
    const id = concepts.length == 0 ? 1 : concepts[cocncepts.length - 1].id + 1;

    concepts.push({ id, note, sanitizedNote, startDate, endDate });

    await docente.update({ concepts });

    res.json(docente);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateConcept = async (req, res) => {
  try {
    const { note, startDate, endDate } = req.body;
    const docente = await Docente.findById(req.params.did).populate("concepts");
    if (!docente) return res.status(404).json({ message: "Docente not found" });

    // check note value;
    if (!Number(note) || Number(note) < 1 || Number(note) > 10) {
      return res.status(400).json({
        message: ["The note must be a number beetween 1 - 10"],
      });
    }
    // check dates values;
    if (!(startDate instanceof Date) || !(endDate instanceof Date)) {
      return res.status(400).json({
        message: ["The startDate and endDate must be a Date data"],
      });
    }

    concepts = docente.concepts;

    const indexToUpdate = concepts.findIndex(
      (concept) => concept.id === req.params.cid
    );
    if (indexToUpdate === -1)
      return res.status(404).json({ message: "Concept not found" });

    concepts[indexToUpdate] = {
      id: cid,
      note: note || concepts[indexToUpdate].note,
      startDate: startDate || concepts[indexToUpdate].startDate,
      endDate: endDate || concepts[indexToUpdate].endDate,
    };

    await docente.update({ concepts });

    return res.json(docente);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
