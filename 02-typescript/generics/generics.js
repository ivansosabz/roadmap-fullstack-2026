// un generics usa una variable de tipo
// es tipo se decidirá cuando se use la función, puede ser number, string, etc
/*
    Los generic
*/
function obtenerPrimeros(lista) {
    return lista[0];
}
var num = obtenerPrimeros([1, 2, 3]);
console.log(num);
var palabra = obtenerPrimeros(['hola', 'hola mundo']);
console.log(palabra);
var persona = obtenerPrimeros([
    { name: "Iván" },
    { name: "Daniela" },
    { name: "Jane" },
]);
/*
    generalmente, son usados para envolver un valor en []
*/
function envolverPalabras(valor) {
    return [valor];
}
// nota: typeScript detecta el tipo y no hace falta poner <string>
var envolver = envolverPalabras("hola mundo");
console.log(envolver);
