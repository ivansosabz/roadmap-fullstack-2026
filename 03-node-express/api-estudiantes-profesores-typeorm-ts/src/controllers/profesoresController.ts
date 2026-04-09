import { Request, Response } from "express";
import { Profesores } from "../models/profesoresModel";

class ProfesoresController {
    constructor() {
    }
    async consultar(req: Request, res: Response) {
        try {
            const data = await Profesores.find();
            res.status(200).json({ msg: "Consulta de Profesores", data });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al consultar Profesores", error: error.message });
            }
        }
    }
    async consultarDetalle(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await Profesores.findOneBy({ id: Number(id) });
            res.status(200).json({ msg: "Consulta de Profesor", registro });

        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al consultar el Profesor", error: error.message });
            }
        }
    }
    async ingresar(req: Request, res: Response) {
        try {
            const registro = await Profesores.save(req.body);
            res.status(201).json({ msg: "Profesor ingresado", registro });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al ingresar Profesores", error: error.message });
            }
        }
    }
    async actualizar(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await Profesores.findOneBy({ id: Number(id) });
            if (!registro) {
                return res.status(404).json({ msg: "Estudiante no encontrado" });
            }
            await Profesores.update({ id: Number(id) }, req.body);
            res.status(200).json({ msg: "Estudiante actualizado" });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al actualizar Profesores", error: error.message });
            }
        }
    }
    async borrar(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await Profesores.findOneBy({ id: Number(id) });
            if (!registro) {
                return res.status(404).json({ msg: "Estudiante no encontrado" });
            }
            await Profesores.delete({ id: Number(id) });
            res.status(200).json({ msg: "Estudiante eliminado" });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al borrar Profesores", error: error.message });
            }
        }
    }
}
// module.exports = new ProfesoresController();
export default new ProfesoresController();