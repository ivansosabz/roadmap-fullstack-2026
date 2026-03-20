// 1 segundo = 1000 milisegundos
setTimeout(() => {
    console.log('Han pasado 3 segundos');
}, 3000); // El segundo argumento es el tiempo en milisegundos

// Si queremos cancelar el timeout antes de que se ejecute, podemos usar clearTimeout
const timeoutId = setTimeout(() => {
    console.log('Este mensaje no se mostrará');
}, 5000);

// Para cancelar el timeout
// clearTimeout(timeoutId); 
