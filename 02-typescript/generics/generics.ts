
// un generics usa una variable de tipo
// es tipo se decidirá cuando se use la función, puede ser number, string, etc
/*
    Los generic
*/

function obtenerPrimeros<T>(lista: T[]):T{
    return lista[0];
}

const num = obtenerPrimeros<number>([1, 2, 3]);
console.log(num);

const palabra = obtenerPrimeros<string>(['hola', 'hola mundo'])
console.log(palabra);

/*
    incluso sirve para objetos
 */

interface Person {
    name: string;
}

const persona = obtenerPrimeros<Person>([
    {name: "Iván"},
    {name: "Daniela"},
    {name: "Jane"},
])

/*
    generalmente, son usados para envolver un valor en []
*/


function envolverPalabras<T>(valor: T):T[]{
    return [valor];
}
// nota: typeScript detecta el tipo y no hace falta poner <string>
const envolver = envolverPalabras("hola mundo");
console.log(envolver);