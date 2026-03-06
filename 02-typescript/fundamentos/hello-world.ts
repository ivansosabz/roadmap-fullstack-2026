// hola mundo
console.log("Hello World");
// tipos: Los tipos permiten decirle a TypeScript qué tipo de dato puede tener una variable. Así detecta errores antes de ejecutar el programa.

// Tipos primitivos
let nombre: string = "Ivan";
let edad: number = 25;
let activo: boolean = true;
let nulo: null = null;
let indefinido: undefined = undefined;
let simbolo: symbol = Symbol("id");
let bigInt: bigint = 1234567890123456789012345678901234567890n;

// Arrays
let numeros: number[] = [1, 2, 3, 4, 5];
let nombres: string[] = ["Ivan", "Juan", "Maria", "Pedro", "Luisa"];
let activos: boolean[] = [true, false, true, false, true];
let nulos: null[] = [null, null, null, null, null];
let indefinidos: undefined[] = [undefined, undefined, undefined, undefined, undefined];
let simbolos: symbol[] = [Symbol("id"), Symbol("id"), Symbol("id"), Symbol("id"), Symbol("id")];

// Otra forma de Arrays
let numbers: Array<number> = [1, 2, 3, 4, 5];

// Objetos
let persona: {
    nombre: string;
    edad: number;
    activo: boolean;
    nulo: null;
    indefinido: undefined;
    simbolo: symbol;
    bigInt: bigint;
} = {
    nombre: "Ivan",
    edad: 25,
    activo: true,
    nulo: null,
    indefinido: undefined,
    simbolo: Symbol("id"),
    bigInt: 1234567890123456789012345678901234567890n,
};

export { };