const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const { infoCursos } = require('./data/cursos.js');
const routerMatematicas = require('./routers/matematicas.js');
const routerProgramacion = require('./routers/programacion.js');

// Routers

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


// Rutas de matemáticas


// Ruta no encontrada
app.use((req, res) => {
    res.status(404).send('Ruta no encontrada');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});