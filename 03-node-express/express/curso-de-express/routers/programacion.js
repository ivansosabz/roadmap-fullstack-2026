const express = require('express');
const { programacion } = require('../data/cursos.js').infoCursos;

const routerProgramacion = express.Router();
routerProgramacion.get('/', (req, res) => {
    res.json(programacion);
});

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje.toLowerCase(); //toLowerCase para hacer la búsqueda insensible a mayúsculas/minúsculas
    const nivel = req.params.nivel.toLowerCase();

    const resultados = programacion.filter(
        curso =>
            curso.lenguaje.toLowerCase() === lenguaje &&
            curso.nivel.toLowerCase() === nivel
    );

    if (resultados.length > 0) {
        res.json(resultados);
    } else {
        res.status(404).send(`No se encontraron cursos de programación para el lenguaje: ${lenguaje} y nivel: ${nivel}`);
    }
});

routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje.toLowerCase();

    const resultados = programacion.filter(
        curso => curso.lenguaje.toLowerCase() === lenguaje
    );

    if (resultados.length > 0) {
        res.json(resultados);
    } else {
        res.status(404).send(`No se encontraron cursos de programación para el lenguaje: ${lenguaje}`);
    }
});

module.exports = routerProgramacion;