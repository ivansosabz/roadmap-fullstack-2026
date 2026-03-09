// función básica: el último : number es el tipo de dato que retorna la función
function sumar(a: number, b: number): number {
    return a + b;
}

// función sin retorno: void
function saludar(nombre: string): void {
    console.log("Hola " + nombre);
}

// función flecha
const sumarFlecha = (a: number, b: number): number => {
    return a + b;
};

// función flecha sin retorno
const saludarFlecha = (nombre: string): void => {
    console.log("Hola " + nombre);
};

// parámetros opcionales: se marcan con ?
function sumarOpcional(a: number, b?: number): number {
    if (b) {
        return a + b;
    }
    return a;
}

// ejercicio: restar(a,b)
function restar(a: number, b: number): number {
    return a-b;
}
console.log("la resta de 20 y 15 es: " + restar(20,15));
// ejercicio: dividir
function dividir(a: number, b: number): GLfloat {
    return a/b;
}
console.log("la division de 20 y 15 es: " + dividir(20,15));