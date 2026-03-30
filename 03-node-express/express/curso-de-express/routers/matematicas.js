const express = require('express');
const { matematicas } = require('../data/cursos.js').infoCursos;

const routerMatematicas = express.Router();
routerMatematicas.get('/', (req, res) => {
    res.json(matematicas);
});

routerMatematicas.get('/:tema', (req, res) => {
    const tema = req.params.tema.toLowerCase();

    const resultados = matematicas.filter(
        curso => curso.tema.toLowerCase() === tema
    );

    if (resultados.length > 0) {
        res.json(resultados);
    } else {
        res.status(404).send(`No se encontraron cursos de matemáticas para el tema: ${tema}`);
    }
});

module.exports = routerMatematicas;
