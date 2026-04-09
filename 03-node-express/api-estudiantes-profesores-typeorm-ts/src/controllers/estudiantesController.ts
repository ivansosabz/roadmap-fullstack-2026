import { Request, Response } from "express";
import { Estudiantes } from "../models/estudiantesModel";

class EstudiantesController {
    constructor() {
    }
    async consultar(req: Request, res: Response) {
        try {
            const data = await Estudiantes.find();
            res.status(200).json({ msg: "Consulta de estudiantes", data });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al consultar estudiantes", error: error.message });
            }
        }
    }
    async consultarDetalle(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await Estudiantes.findOneBy({ id: Number(id) });
            res.status(200).json({ msg: "Consulta de estudiante", registro });

        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al consultar el estudiante", error: error.message });
            }
        }
    }
    async ingresar(req: Request, res: Response) {
        try {
            const registro = await Estudiantes.save(req.body);
            res.status(201).json({ msg: "Estudiante ingresado", registro });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al ingresar estudiantes", error: error.message });
            }
        }
    }
    async actualizar(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await Estudiantes.findOneBy({ id: Number(id) });
            if (!registro) {
                return res.status(404).json({ msg: "Estudiante no encontrado" });
            }
            await Estudiantes.update({ id: Number(id) }, req.body);
            res.status(200).json({ msg: "Estudiante actualizado" });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al actualizar estudiantes", error: error.message });
            }
        }
    }
    async borrar(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const registro = await Estudiantes.findOneBy({ id: Number(id) });
            if (!registro) {
                return res.status(404).json({ msg: "Estudiante no encontrado" });
            }
            await Estudiantes.delete({ id: Number(id) });
            res.status(200).json({ msg: "Estudiante eliminado" });
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al borrar estudiantes", error: error.message });
            }
        }
    }
}
// module.exports = new EstudiantesController();
export default new EstudiantesController();