/*
interfaces: son contratos que definen la estructura de un objeto.
*/
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    //propiedad opcional
    activo?: boolean;
}

const usuario: Usuario = {
    id: 1,
    nombre: "Juan",
    email: "[EMAIL_ADDRESS]"

}

/*
extender interfaces
*/

interface UsuarioAdmin extends Usuario {
    rol: string;
}

const usuarioAdmin: UsuarioAdmin = {
    id: 1,
    nombre: "Juan",
    email: "[EMAIL_ADDRESS]",
    rol: "admin"
}

// console.log(usuarioAdmin);


/*
    types: type también describe estructura de objetos, pero no se puede extender
*/
type Producto = {
    id: number;
    nombre: string;
    precio: number;
}

const producto: Producto = {
    id: 1,
    nombre: "Juan",
    precio: 100
}

// console.log(producto);

// union types: sirve para definir que una variable pueda ser de varios tipos
type Estado = "pendiente" | "completado" | "cancelado";
// esto restringe los valores que puede tomar la variable a solo los que estan definidos en el type
const estado: Estado = "pendiente";

// console.log(estado);

// combinar tipos

type User = {
    id: number
    nombre: string
}
// aqui admin tiene todo lo de usuario + permisos
type Admin = User & {
    permisos: string[]
}

const admin: Admin = {
    id: 1,
    nombre: "Juan",
    permisos: ["leer", "escribir"]
}

// ejercicio: sistema simple de usuarios

interface UserP {
    id: number
    nombre: string
    email: string
    activo?: boolean
}
type RolP = "admin" | "usuario" | "invitado"

const user1: UserP = {
    id: 1,
    nombre: "Iván",
    email: "ivansosabz@gmail.com",
    activo: true
}
const users: UserP[] = [{
    id: 2,
    nombre: "Carlos",
    email: "",
},{
    id: 3,
    nombre: "Daniela",
    email: "",
}, user1
];