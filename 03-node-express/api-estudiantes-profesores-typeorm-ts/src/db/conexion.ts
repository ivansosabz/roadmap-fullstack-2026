import { DataSource } from "typeorm";
import { Estudiantes } from "../models/estudiantesModel";
import { Cursos } from "../models/cursosModel";
import { Profesores } from "../models/profesoresModel";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "hello",
    database: "courses",
    synchronize: false, // Nunca usar synchronize: true en producción, puede causar pérdida de datos.
    logging: true,
    entities: [Estudiantes, Cursos, Profesores],
    subscribers: [],
    // migrations: [],
})