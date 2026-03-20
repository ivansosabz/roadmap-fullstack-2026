/*
    algunos modulos built-in de node son:
    -http: para crear servidores web
    -https: para crear servidores web seguros
    -fs: para trabajar con el sistema de archivos
    -os: para obtener información del sistema operativo
    -path: para trabajar con rutas de archivos y directorios
*/
// ejemplo de uso del modulo os
const os = require("os");
console.log(os.type());
console.log(os.homedir());
console.log(os.uptime());
console.log(os.userInfo());