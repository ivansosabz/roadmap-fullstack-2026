const db = require('../database/conexion');
class ProfesoresController {
    constructor () {
    }
    consultar (req, res) {
        res.json({msg: "consulta de profesores"});
    }
    consultarDetalle (req, res) {
        const {id} = req.params;
        res.json({msg: `consulta del profesor ${id}`});
    }
    ingresar (req, res) {
        res.json({msg: "ingreso de profesor"});
    }
    actualizar (req, res) {
        const {id} = req.params;
        res.json({msg: `actualización del profesor ${id}`});
    }
    borrar (req, res) {
        const {id} = req.params;
        res.json({msg: `eliminar el profesor ${id}`});
    }
}
module.exports = new ProfesoresController();