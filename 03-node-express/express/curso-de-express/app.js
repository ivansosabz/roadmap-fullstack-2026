const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const {infoCursos} = require('./cursos.js');

// Rutas
app.get('/', (req, res) => {
    res.send('Servidor en Express');
});
app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});
app.get('/api/cursos/programacion', (req, res) => {
    res.send(infoCursos.programacion);
});
app.get('/api/cursos/programacion/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);
    if (resultados.length > 0) {
        res.send(resultados);
    } else {
        res.status(404).send(`No se encontraron cursos de programación para el lenguaje: ${lenguaje}`);
    }
});
app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
    if (resultados.length > 0) {
        res.send(resultados);
    } else {
        res.status(404).send(`No se encontraron cursos de programación para el lenguaje: ${lenguaje} y nivel: ${nivel}`);
    }
});
app.get('/api/cursos/matematicas', (req, res) => {
    res.send(JSON.stringify(infoCursos.matematicas));
});
app.get('/api/cursos/matematicas/:tema', (req, res) => {
    const tema = req.params.tema;
    const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema);
    if (resultados.length > 0) {
        res.send(resultados);
    } else {
        res.status(404).send(`No se encontraron cursos de matemáticas para el tema: ${tema}`);
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});