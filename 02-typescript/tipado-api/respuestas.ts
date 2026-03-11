import {Usuario} from "./modelos";

export interface UsuarioResponse {
    data: Usuario[];
    total: number;
}

/*
    data -> array de usuarios
    total -> número total
*/

// Función que consume una API
