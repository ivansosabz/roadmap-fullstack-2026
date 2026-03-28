// si recibes una solicitud a la ruta /saludo, responde con un mensaje de saludo

const http = require('http'); 
const cursos = require('./cursos.js');

const servidor = http.createServer((req, res) => {
    const {method} = req;
    if (method === 'GET'){
        return manejarSolicitudGET(req, res);
    }else if (method === 'POST'){
        return manejarSolicitudPOST(req, res);
    }else if (method === 'PUT'){
        return manejarSolicitudPUT(req, res);   
    }else if (method === 'DELETE'){
        return manejarSolicitudDELETE(req, res);
    }else{
        res.statusCode = 404;
        return res.end(`El método ${method} no está soportado por el servidor`);
    }
});

const manejarSolicitudGET = (req, res) => {
    const path = req.url;
    if (path === '/'){
        res.statusCode = 200;
        return res.end('Bienvenido a mi servidor');
    }else if (path === '/cursos'){
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos));
    }else if (path === '/cursos/programacion'){
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos.programacion));
    }else{
        res.statusCode = 404;
        return res.end(`La ruta ${path} no existe en el servidor`);
    }
}
const manejarSolicitudPOST = (req, res) => {
    const path = req.url;
    if (path === '/cursos/programacion'){
        res.statusCode = 200;
        return res.end('Curso de programación creado');
    }else{
        res.statusCode = 404;
    }
}
const manejarSolicitudPUT = (req, res) => {
    const path = req.url;
    if (path === '/cursos/programacion'){
        res.statusCode = 200;
        return res.end('Curso de programación actualizado');
    }else{
        res.statusCode = 404;
    }
}
const manejarSolicitudDELETE = (req, res) => {
    const path = req.url;
    if (path === '/cursos/programacion'){
        res.statusCode = 200;
        return res.end('Curso de programación eliminado');
    }else{
        res.statusCode = 404;
    }
}   

servidor.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});