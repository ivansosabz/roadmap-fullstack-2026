const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const { infoCursos } = require('./cursos.js');

// Routers
const routerProgramacion = express.Router();
const routerMatematicas = express.Router();

app.use('/api/cursos/programacion', routerProgramacion);
app.use('/api/cursos/matematicas', routerMatematicas);

// Rutas principales
app.get('/', (req, res) => {
    res.send('Servidor en Express');
});

app.get('/api/cursos', (req, res) => {
    res.json(infoCursos);
});

// Rutas de programación
routerProgramacion.get('/', (req, res) => {
    res.json(infoCursos.programacion);
});

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje.toLowerCase(); //toLowerCase para hacer la búsqueda insensible a mayúsculas/minúsculas
    const nivel = req.params.nivel.toLowerCase(); 

    const resultados = infoCursos.programacion.filter(
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

    const resultados = infoCursos.programacion.filter(
        curso => curso.lenguaje.toLowerCase() === lenguaje
    );

    if (resultados.length > 0) {
        res.json(resultados);
    } else {
        res.status(404).send(`No se encontraron cursos de programación para el lenguaje: ${lenguaje}`);
    }
});

// Rutas de matemáticas
routerMatematicas.get('/', (req, res) => {
    res.json(infoCursos.matematicas);
});

routerMatematicas.get('/:tema', (req, res) => {
    const tema = req.params.tema.toLowerCase();

    const resultados = infoCursos.matematicas.filter(
        curso => curso.tema.toLowerCase() === tema
    );

    if (resultados.length > 0) {
        res.json(resultados);
    } else {
        res.status(404).send(`No se encontraron cursos de matemáticas para el tema: ${tema}`);
    }
});

// Ruta no encontrada
app.use((req, res) => {
    res.status(404).send('Ruta no encontrada');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});