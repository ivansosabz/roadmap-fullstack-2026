const express = require("express");
const router = express.Router();
const cursosController = require("../controllers/cursosController");

router.get("/", cursosController.consultar);
router.post("/", cursosController.ingresar)
router.post("/asociar", cursosController.asociarCursoEstudiante)
router.route("/:id")
    .get(cursosController.consultarDetalle)
    .put(cursosController.actualizar)
    .delete(cursosController.borrar)

module.exports = router;