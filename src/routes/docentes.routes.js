import { Router } from "express";
import {
  getDocentes,
  getDocente,
  deleteDocente,
  createDocente,
  updateDocente
} from "../controllers/docentes.controllers.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createDocenteSchema, updateDocenteSchema } from "../schemas/docente.schema.js";

const router = Router();

router.get("/", auth, getDocentes);

router.get("/:id", auth, getDocente);

router.delete("/:id", auth, deleteDocente);

router.post("/", auth, validateSchema(createDocenteSchema), createDocente);

router.put("/:id", auth, validateSchema(updateDocenteSchema),updateDocente);

export default router;
