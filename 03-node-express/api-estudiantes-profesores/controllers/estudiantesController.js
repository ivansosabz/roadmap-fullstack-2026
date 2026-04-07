const db = require('../database/conexion');
class EstudiantesController {
    constructor () {
    }
    consultar (req, res) {
        // const { dni, nombre, apellido, email } = req.body;
        db.query(`select * from estudiantes`,
            (err, result) => {
                if (err) {
                    return res.status(400).json(err);
                }
                return res.status(201).json({
                    msg: "estudiantes",
                    result
                });
            }
        );
    }
    consultarDetalle (req, res) {
        const {id} = req.params;

        db.query(`select * from estudiantes where id = ?`, [id],
            (err, result) => {
                if (err) {
                    return res.status(400).json(err);
                }
                return res.status(201).json({
                    msg: `consulta del estudiante ${id}`,
                    result
                });
            }
        );
    }
    ingresar(req, res) {
        const { dni, nombre, apellido, email } = req.body;
        db.query(`INSERT INTO estudiantes (id, dni, nombre, apellido, email) VALUES (NULL, ?, ?, ?, ?)`, [dni, nombre, apellido, email],
            (err, result) => {
                if (err) {
                    return res.status(400).json(err);
                }
                return res.status(201).json({
                    msg: "Estudiante creado correctamente",
                    result
                });
            }
        );
    }
    actualizar (req, res) {
        const {id} = req.params;
        const { dni, nombre, apellido, email } = req.body;
        db.query(`update estudiantes set dni=?, nombre=?, apellido=?, email=? where id =?`, [dni, nombre, apellido, email, id],
            (err, result) => {
                if (err) {
                    return res.status(400).json(err);
                }
                return res.status(200).json({
                    msg: "Estudiante modificado correctamente",
                    result
                });
            }
        );
    }
    borrar(req, res) {
        const { id } = req.params;

        db.query(
            `DELETE FROM estudiantes WHERE id = ?`,
            [id],
            (err, result) => {
                if (err) {
                    return res.status(400).json(err);
                }

                return res.status(200).json({
                    msg: `Estudiante ${id} eliminado correctamente`,
                    result
                });
            }
        );
    }
}
module.exports = new EstudiantesController();