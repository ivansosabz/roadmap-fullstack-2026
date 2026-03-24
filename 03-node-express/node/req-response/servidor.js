const http = require('http');
const { url } = require('inspector');

const server = http.createServer((req, res) => {
    console.log("==>req (solicitud)");
    console.log(req.url); // la propiedad url del objeto req nos permite acceder a la ruta de la solicitud, en este caso estamos imprimiendo la ruta de la solicitud en la consola
    console.log(req.method);
    // console.log(req.headers); // la propiedad headers del objeto req nos permite acceder a los encabezados de la solicitud, en este caso estamos imprimiendo los encabezados de la solicitud en la consola

    // ======= respuesta =======
    console.log("==>res (respuesta)");
    console.log(res.statusCode); // la propiedad statusCode del objeto res nos permite acceder al código de estado de la respuesta, en este caso estamos imprimiendo el código de estado de la respuesta en la consola
    res.end('Hola Mundo');
});

const puerto = 3000;
server.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto ${puerto}`);
})
