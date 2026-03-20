// el modulo fs (file system) nos permite interactuar con el sistema de archivos
const fs = require('fs');

fs.readFile('index.html', 'utf-8', (err, contenido)=> {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    console.log('Contenido del archivo:', contenido);
});
