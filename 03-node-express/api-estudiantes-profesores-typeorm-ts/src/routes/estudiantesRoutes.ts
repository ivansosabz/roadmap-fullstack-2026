// const express = require("express");
import express from "express";
const router = express.Router();
// const estudiantesController = require("../controllers/estudiantesController");
import estudiantesController from "../controllers/estudiantesController";

router.get("/", estudiantesController.consultar);
router.post("/", estudiantesController.ingresar)
router.route("/:id")
    .get(estudiantesController.consultarDetalle)
    .put(estudiantesController.actualizar)
    .delete(estudiantesController.borrar)

// module.exports = router;
export default router;