import { Request, Response } from "express";

class ProfesoresController {
    constructor() {
    }
    consultar(req: Request, res: Response) {
        try {
            res.send("Consulta de profesores");
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al consultar profesores", error: error.message });
            }
        }
    }
    consultarDetalle(req: Request, res: Response) {
        try {
            res.send("Consulta de un profesor");
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al consultar el profesor", error: error.message });
            }
        }
    }
    ingresar(req: Request, res: Response) {
        try {
            res.send("Ingreso de profesores");
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al ingresar profesores", error: error.message });
            }
        }
    }
    actualizar(req: Request, res: Response) {
        try {
            res.send("Actualización de profesores");
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al actualizar profesores", error: error.message });
            }
        }
    }
    borrar(req: Request, res: Response) {
        try {
            res.send("Borrado de profesores");
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al borrar profesores", error: error.message });
            }
        }
    }
}
export default new ProfesoresController();