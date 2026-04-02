const express = require('express');
const { programacion } = require('../data/cursos.js').infoCursos;

const routerProgramacion = express.Router();
routerProgramacion.use(express.json()); // Middleware para parsear JSON
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

routerProgramacion.post('/', (req, res) => {
    let cursoNuevo = req.body; // Obtener el nuevo curso del cuerpo de la solicitud
    programacion.push(cursoNuevo); // Agregar el nuevo curso al arreglo de programación
    res.status(201).json(cursoNuevo); // Responder con el nuevo curso creado
});
routerProgramacion.put('/:id', (req, res) => {
    const id = parseInt(req.params.id); // Obtener el ID del curso a actualizar
    const cursoIndex = programacion.findIndex(curso => curso.id === id); // Buscar el índice del curso en el arreglo
    if (cursoIndex >=0 ) {
        const cursoActualizado = { ...programacion[cursoIndex], ...req.body };// Crear un nuevo objeto de curso actualizado combinando el curso existente con los nuevos datos
        programacion[cursoIndex] = cursoActualizado; // Actualizar el curso en el arreglo
        res.json(cursoActualizado); // Responder con el curso actualizado
    } else {
        res.status(404).send(`No se encontró un curso de programación con el ID: ${id}`);
    }
});

routerProgramacion.patch('/:id', (req, res) => { //pach se utiliza para actualizar parcialmente un recurso, es decir, solo los campos que se proporcionan en el cuerpo de la solicitud serán actualizados, mientras que los demás campos permanecerán sin cambios.
    const id = parseInt(req.params.id); // Obtener el ID del curso a actualizar
    const cursoIndex = programacion.findIndex(curso => curso.id === id); // Buscar el índice del curso en el arreglo
    if (cursoIndex >=0 ) {
        const cursoActualizado = { ...programacion[cursoIndex], ...req.body };// Crear un nuevo objeto de curso actualizado combinando el curso existente con los nuevos datos (solo los campos proporcionados en el cuerpo de la solicitud)
        programacion[cursoIndex] = cursoActualizado; // Actualizar el curso en el arreglo
        res.json(cursoActualizado); // Responder con el curso actualizado
    } else {
        res.status(404).send(`No se encontró un curso de programación con el ID: ${id}`);
    }
});
routerProgramacion.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const cursoIndex = programacion.findIndex(curso => curso.id === id);
    if (cursoIndex >= 0) {
        programacion.splice(cursoIndex, 1);// Eliminar el curso del arreglo utilizando splice
        res.json({ message: `Curso con ID: ${id} eliminado correctamente` });
    } else {
        res.status(404).send(`No se encontró un curso de programación con el ID: ${id}`);
    }
});
module.exports = routerProgramacion;