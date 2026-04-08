import { Request, Response } from "express";

class EstudiantesController {
    constructor() {
    }
    consultar(req: Request, res: Response) {
        try {
            res.send("Consulta de estudiantes");
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al consultar estudiantes", error: error.message });
            }
        }
    }
    consultarDetalle(req: Request, res: Response) {
        try {
            res.send("Consulta de un estudiantes");
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al consultar el estudiante", error: error.message });
            }
        }
    }
    ingresar(req: Request, res: Response) {
        try {
            res.send("Ingreso de estudiantes");
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al ingresar estudiantes", error: error.message });
            }
        }
    }
    actualizar(req: Request, res: Response) {
        try {
            res.send("Actualización de estudiantes");
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al actualizar estudiantes", error: error.message });
            }
        }
    }
    borrar(req: Request, res: Response) {
        try {
            res.send("Borrado de estudiantes");
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al borrar estudiantes", error: error.message });
            }
        }
    }
}
// module.exports = new EstudiantesController();
export default new EstudiantesController();