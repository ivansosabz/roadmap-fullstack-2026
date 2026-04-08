const db = require('../database/conexion');
class CursosController {
    constructor() {
    }
    consultar(req, res) {
        db.query(`select * from cursos`,
            (err, result) => {
                if (err) {
                    return res.status(400).json(err);
                }
                return res.status(201).json({
                    msg: "cursos",
                    result
                });
            }
        );
    }
    consultarDetalle(req, res) {
        const { id } = req.params;

        db.query(`select * from cursos where id = ?`, [id],
            (err, result) => {
                if (err) {
                    return res.status(400).json(err);
                }
                return res.status(201).json({
                    msg: `consulta del curso ${id}`,
                    result
                });
            }
        );
    }
    ingresar(req, res) {
        const { nombre, descripcion, profesor_id } = req.body;
        db.query(`INSERT INTO cursos (id, nombre, descripcion, profesor_id) VALUES (NULL, ?, ?, ?)`, [nombre, descripcion, profesor_id],
            (err, result) => {
                if (err) {
                    return res.status(400).json(err);
                }
                return res.status(201).json({
                    msg: "curso creado correctamente",
                    result
                });
            }
        );
    }
    
    actualizar(req, res) {
        const { id } = req.params;
        const { nombre, descripcion, profesor_id } = req.body;
        db.query(`update cursos set nombre=?, descripcion=?, profesor_id=? where id =?`, [nombre, descripcion, profesor_id, id],
            (err, result) => {
                if (err) {
                    return res.status(400).json(err);
                }
                return res.status(200).json({
                    msg: "curso modificado correctamente",
                    result
                });
            }
        );
    }
    borrar(req, res) {
        const { id } = req.params;

        db.query(
            `DELETE FROM cursos WHERE id = ?`,
            [id],
            (err, result) => {
                if (err) {
                    return res.status(400).json(err);
                }

                return res.status(200).json({
                    msg: `curso ${id} eliminado correctamente`,
                    result
                });
            }
        );
    }
    asociarCursoEstudiante(req, res) {
        const { curso_id, estudiante_id } = req.body;
        db.query(`INSERT INTO cursos_estudiantes (curso_id, estudiante_id) VALUES (?, ?)`, [curso_id, estudiante_id],
            (err, result) => {
                if (err) {
                    return res.status(400).json(err);
                }
                return res.status(201).json({
                    msg: "asociación creada correctamente",
                    result
                });
            }
        );
    }
}

module.exports = new CursosController();