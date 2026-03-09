// las interfacer sirven para definir la estructura de un objeto
// interface Persona {
//     nombre: string;
//     edad: number;
// }
// crear un objeto con la estructura de la interfaz
var persona = {
    nombre: "Juan",
    edad: 25,
    saludar: function () {
        console.log("Hola " + this.nombre);
    }
};
persona.saludar();
