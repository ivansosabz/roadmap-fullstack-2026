const db = require('../database/conexion');
class EstudiantesController {
    constructor () {
    }
    consultar (req, res) {
        res.json({msg: "consulta de estudiantes"});
    }
    consultarDetalle (req, res) {
        const {id} = req.params;
        res.json({msg: `consulta del estudiante ${id}`});
    }
    ingresar (req, res) {
        res.json({msg: "ingreso de estudiante"});
    }
    actualizar (req, res) {
        const {id} = req.params;
        res.json({msg: `actualización del estudiante ${id}`});
    }
    borrar (req, res) {
        const {id} = req.params;
        res.json({msg: `eliminar el estudiante ${id}`});
    }
}
module.exports = new EstudiantesController();