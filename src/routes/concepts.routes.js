import { Router } from "express";
import {
  createConcept,
  deleteConcept,
  getConcepts,
} from "../controllers/concepts.controllers.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { ConceptSchema } from "../schemas/concept.schema.js";

const router = Router();

//--add year to docente
router.post("/docente/:did/yearconcept", auth, addYearConcepts);

router.get("/docente/:did", auth, getConcepts);

router.delete("/:cid/docente/:did", auth, deleteConcept);

router.post(
  "/docente/:did",
  auth,
  validateSchema(ConceptSchema),
  createConcept
);

export default router;
