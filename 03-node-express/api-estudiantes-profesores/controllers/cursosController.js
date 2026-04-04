const db = require('../database/conexion');
class CursosController {
    constructor () {
    }
    consultar (req, res) {
        res.json({msg: "consulta de cursos"});
    }
    consultarDetalle (req, res) {
        const {id} = req.params;
        res.json({msg: `consulta del curso ${id}`});
    }
    ingresar (req, res) {
        res.json({msg: "ingreso de curso"});
    }
    actualizar (req, res) {
        const {id} = req.params;
        res.json({msg: `actualización del curso ${id}`});
    }
    borrar (req, res) {
        const {id} = req.params;
        res.json({msg: `eliminar el curso ${id}`});
    }
}
module.exports = new CursosController();