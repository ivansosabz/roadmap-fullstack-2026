// función básica: el último : number es el tipo de dato que retorna la función
function sumar(a, b) {
    return a + b;
}
// función sin retorno: void
function saludar(nombre) {
    console.log("Hola " + nombre);
}
// función flecha
var sumarFlecha = function (a, b) {
    return a + b;
};
// función flecha sin retorno
var saludarFlecha = function (nombre) {
    console.log("Hola " + nombre);
};
// parámetros opcionales: se marcan con ?
function sumarOpcional(a, b) {
    if (b) {
        return a + b;
    }
    return a;
}
// ejercicio: restar(a,b)
function restar(a, b) {
    return a - b;
}
console.log("la resta de 20 y 15 es: " + restar(20, 15));
// ejercicio: dividir
function dividir(a, b) {
    return a / b;
}
console.log("la division de 20 y 15 es: " + dividir(20, 15));
