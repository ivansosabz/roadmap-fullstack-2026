const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });// el método writeHead nos permite escribir los encabezados de la respuesta, en este caso estamos escribiendo un encabezado con el código de estado 200 y el tipo de contenido text/plain 
    res.end('Hola Mundo');
}); 

const puerto = 3000;
server.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
}); 