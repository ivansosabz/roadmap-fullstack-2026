/*
    notas:
    => en esta carpeta se define los modelos de los datos
*/

// ejemplo: modelo de usuarios
export interface Usuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
}

// ejemplo: modelo con relación
export interface Curso {
    id: number;
    nombre: string;
    duracion: number;
}
export interface Estudiante {
    id: number;
    nombre: string;
    curso: Curso; //=> relación con cursos
}

// Para importar modelos se hace de la siguiente manera

//import {Usuario} from "./modelos"