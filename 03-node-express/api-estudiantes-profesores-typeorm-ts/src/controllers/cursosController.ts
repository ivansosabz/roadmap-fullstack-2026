import { Request, Response } from "express";

class CursosController {
    constructor() {
    }
    consultar(req: Request, res: Response) {
        try {
            res.send("Consulta de cursos");
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al consultar cursos", error: error.message });
            }
        }
    }
    consultarDetalle(req: Request, res: Response) {
        try {
            res.send("Consulta de un curso");
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al consultar el curso", error: error.message });
            }
        }
    }
    ingresar(req: Request, res: Response) {
        try {
            res.send("Ingreso de cursos");
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al ingresar cursos", error: error.message });
            }
        }
    }
    actualizar(req: Request, res: Response) {
        try {
            res.send("Actualización de cursos");
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al actualizar cursos", error: error.message });
            }
        }
    }
    borrar(req: Request, res: Response) {
        try {
            res.send("Borrado de cursos");
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al borrar cursos", error: error.message });
            }
        }
    }
    asociarCursoEstudiante(req: Request, res: Response) {
        try {
            res.send("asociar curso estudiante");
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ msg: "Error al asociar curso con estudiante", error: error.message });
            }
        }
    }
}
export default new CursosController();
