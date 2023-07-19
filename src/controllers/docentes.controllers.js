import Docente from "../models/docente.model.js";

export const getDocentes = async (req, res) => {
  try {
    const docentes = await Docente.find()
    .populate("concepts")
    .populate("createdBy")
    .populate("updatedBy");
    res.json(docentes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getDocente = async (req, res) => {
  try {
    const docente = await Docente.findById(req.params.id)
      .populate("concepts")
      .populate("createdBy")
      .populate("updatedBy");
    if (!docente) return res.status(404).json({ message: "Docente not found" });
    return res.json(docente);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteDocente = async (req, res) => {
  try {
    const deletedDocente = await Docente.findByIdAndDelete(req.params.id);
    if (!deletedDocente)
      return res.status(404).json({ message: "Docente not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createDocente = async (req, res) => {
  try {
    const { name, lastname, dni } = req.body;

    // check dni is a number;
    if (!Number(dni)){
      return res.status(400).json({
        message: ["The dni must be a number"],
      });
    }
    
    // check duplicate data
    const dniFound = await Docente.findOne({ dni:Number(dni) });
    if (dniFound){
      return res.status(400).json({
        message: ["The dni is already in use"],
      });
    }

    const newDocente = new Docente({
      name,
      lastname,
      dni: Number(dni),
      concepts : [],
      createdBy: req.user.id,
    });
    await newDocente.save();
    res.json(newDocente);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateDocente = async (req, res) => {
  try {
    const { name, lastname, dni } = req.body;


    // check dni is a number;
    if (!Number(dni)){
      return res.status(400).json({
        message: ["The dni must be a number"],
      });
    }
    
    // check duplicate data
    const dniFound = await Docente.findOne({ dni:Number(dni) });
    if (dniFound){
      return res.status(400).json({
        message: ["The dni is already in use"],
      });
    }


    const docenteUpdated = await Docente.findOneAndUpdate(
      { _id: req.params.id },
      {       name,
        lastname,
        dni: Number(dni), },
      { new: true }
    );
    return res.json(docenteUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
