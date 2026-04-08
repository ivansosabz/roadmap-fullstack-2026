const db = require('../database/conexion');
class ProfesoresController {
    constructor () {
    }
    consultar (req, res) {
        db.query(`select * from profesores`,
            (err, result) => {
                if (err) {
                    return res.status(400).json(err);
                }
                return res.status(201).json({
                    msg: "profesores",
                    result
                });
            }
        );
    }
    consultarDetalle (req, res) {
        const { id } = req.params;

        db.query(`select * from profesores where id = ?`, [id],
            (err, result) => {
                if (err) {
                    return res.status(400).json(err);
                }
                return res.status(201).json({
                    msg: `consulta del profesor ${id}`,
                    result
                });
            }
        );
    }
    ingresar (req, res) {
        const { dni, nombre, apellido, email, profesion, telefono } = req.body;
        db.query(`INSERT INTO profesores (id, dni, nombre, apellido, email, profesion, telefono) VALUES (NULL, ?, ?, ?, ?, ?, ?)`, [dni, nombre, apellido, email, profesion, telefono],
            (err, result) => {
                if (err) {
                    return res.status(400).json(err);
                }
                return res.status(201).json({
                    msg: "Profesor creado correctamente",
                    result
                });
            }
        );
    }
    actualizar (req, res) {
        const { id } = req.params;
        const { dni, nombre, apellido, email, profesion, telefono } = req.body;
        db.query(`update profesores set dni=?, nombre=?, apellido=?, email=?, profesion=?, telefono=? where id =?`, [dni, nombre, apellido, email, profesion, telefono, id],
            (err, result) => {
                if (err) {
                    return res.status(400).json(err);
                }
                return res.status(200).json({
                    msg: "Profesor modificado correctamente",
                    result
                });
            }
        );
    }
    borrar (req, res) {
        const { id } = req.params;

        db.query(
            `DELETE FROM profesores WHERE id = ?`,
            [id],
            (err, result) => {
                if (err) {
                    return res.status(400).json(err);
                }

                return res.status(200).json({
                    msg: `Profesor ${id} eliminado correctamente`,
                    result
                });
            }
        );
    }
}
module.exports = new ProfesoresController();