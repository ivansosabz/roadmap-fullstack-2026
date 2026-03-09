// las interfacer sirven para definir la estructura de un objeto
// interface Persona {
//     nombre: string;
//     edad: number;
// }

// crear un objeto con la estructura de la interfaz
/*
const persona: Persona = {
    nombre: "Juan",
    edad: 25,
};

console.log(persona);*/

// interfaces con metodos
interface Persona {
    nombre: string;
    edad: number;
    saludar(): void;
}

// crear un objeto con la estructura de la interfaz
const persona: Persona = {
    nombre: "Juan",
    edad: 25,
    saludar() {
        console.log("Hola " + this.nombre);
    }
};

persona.saludar();