import { Request, Response } from "express";
import { Cursos } from "../models/cursosModel";
import { Profesores } from "../models/profesoresModel";
import { Estudiantes } from "../models/estudiantesModel"; // CORRECCIÓN: importé Estudiantes para poder asociarlo al curso

class CursosController {
    constructor() {
    }

    async consultar(req: Request, res: Response) {
        try {
            const data = await Cursos.find({
                relations: ["profesor", "estudiantes"]
                // CORRECCIÓN: agregué "relations"
                // Esto hace que TypeORM también traiga:
                // - el profesor del curso
                // - los estudiantes asociados
            });

            res.status(200).json({ msg: "Consulta de Cursos", data });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al consultar Cursos", error: error.message });
            }
        }
    }

    async consultarDetalle(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const registro = await Cursos.findOne({
                where: { id: Number(id) },
                // CORRECCIÓN: reemplacé findOneBy por findOne
                // porque findOneBy NO permite cargar relaciones

                relations: ["profesor", "estudiantes"]
                // CORRECCIÓN: agregué relations para que incluya:
                // - el profesor del curso
                // - los estudiantes asociados
            });

            if (!registro) {
                return res.status(404).json({ msg: "Curso no encontrado" });
                // MEJORA: validación por si no existe el curso
            }

            res.status(200).json({ msg: "Consulta de curso", registro });

        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al consultar el curso", error: error.message });
            }
        }
    }

    async ingresar(req: Request, res: Response) {
        try {
            const { nombre, descripcion, profesor_id } = req.body;

            const profesor = await Profesores.findOneBy({ id: Number(profesor_id) });

            if (!profesor) {
                return res.status(404).json({ msg: "Profesor no encontrado" });
            }

            const registro = Cursos.create({
                nombre,
                descripcion,
                profesor
            });

            await registro.save();

            res.status(201).json({ msg: "Curso ingresado", registro });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al ingresar Cursos", error: error.message });
            }
        }
    }

    async actualizar(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await Cursos.findOneBy({ id: Number(id) });
            if (!registro) {
                return res.status(404).json({ msg: "curso no encontrado" });
            }
            await Cursos.update({ id: Number(id) }, req.body);
            res.status(200).json({ msg: "curso actualizado" });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al actualizar Cursos", error: error.message });
            }
        }
    }

    async borrar(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await Cursos.findOneBy({ id: Number(id) });
            if (!registro) {
                return res.status(404).json({ msg: "curso no encontrado" });
            }
            await Cursos.delete({ id: Number(id) });
            res.status(200).json({ msg: "curso eliminado" });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al borrar Cursos", error: error.message });
            }
        }
    }

    async asociarCursoEstudiante(req: Request, res: Response) {
        try {
            const { curso_id, estudiante_id } = req.body;
            // CORRECCIÓN: obtengo ambos ids desde el body

            const curso = await Cursos.findOne({
                where: { id: Number(curso_id) },
                relations: ["estudiantes"]
            });
            // CORRECCIÓN: cargo también la relación "estudiantes"
            // porque necesito agregar un estudiante al array existente

            if (!curso) {
                return res.status(404).json({ msg: "Curso no encontrado" });
            }

            const estudiante = await Estudiantes.findOneBy({ id: Number(estudiante_id) });
            // CORRECCIÓN: busco el estudiante por su id

            if (!estudiante) {
                return res.status(404).json({ msg: "Estudiante no encontrado" });
            }

            const yaAsociado = curso.estudiantes.some(
                (item) => item.id === estudiante.id
            );
            // CORRECCIÓN: verifico si el estudiante ya estaba asociado al curso
            // para no duplicar la relación

            if (yaAsociado) {
                return res.status(400).json({ msg: "El estudiante ya está asociado a este curso" });
            }

            curso.estudiantes.push(estudiante);
            // CORRECCIÓN: agrego el estudiante al array de estudiantes del curso

            await curso.save();
            // CORRECCIÓN: guardo el curso para que TypeORM persista la relación many-to-many

            res.status(200).json({
                msg: "Estudiante asociado al curso correctamente",
                curso
            });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({
                    msg: "Error al asociar estudiante al curso",
                    error: error.message
                });
            }
        }
    }
}

export default new CursosController();