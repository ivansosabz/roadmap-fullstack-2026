import express from "express";
const router = express.Router();
import cursosController from "../controllers/cursosController";

router.get("/", cursosController.consultar);
router.post("/", cursosController.ingresar)
router.post("/asociar", cursosController.asociarCursoEstudiante)
router.route("/:id")
    .get(cursosController.consultarDetalle)
    .put(cursosController.actualizar)
    .delete(cursosController.borrar)

export default router;