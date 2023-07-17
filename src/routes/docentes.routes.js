import { Router } from "express";
import {
  getDocentes,
  getDocente,
  deleteDocente,
  createDocente,
} from "../controllers/docentes.controllers.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createDocenteSchema } from "../schemas/docente.schema.js";

const router = Router();

router.get("/", auth, getDocentes);

router.get("/:id", auth, getDocente);

router.delete("/:id", auth, deleteDocente);

router.post("/", auth, validateSchema(createDocenteSchema), createDocente);

// router.put("/tasks/:id", auth, updateTask);

export default router;
