var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// creación de cursos
var cursos = [
    {
        id: 1,
        nombre: "TypeScript",
        duracion: 20,
    }, {
        id: 2,
        nombre: "Node",
        duracion: 30,
    }
];
// creación de estudiantes
var estudiantes = [
    {
        id: 1,
        nombre: "Iván",
        activo: true,
        curso: cursos[0],
    },
    {
        id: 2,
        nombre: "Rossmary",
        activo: true,
        curso: cursos[1],
    }
];
// crear funciones tipadas: función para mostrar estudiantes
function mostrarEstudiantes(lista) {
    lista.forEach(function (estudiante) {
        console.log("".concat(estudiante.nombre, ": ").concat(estudiante.activo));
    });
}
mostrarEstudiantes(estudiantes);
// función para crear curso
function crearCurso(nombre, duracion) {
    return {
        id: Math.random(),
        nombre: nombre,
        duracion: duracion
    };
}
// función para agregar id a cualquier objeto
function agregarId(objeto) {
    return __assign({ id: Math.floor(Math.random() * 1000) }, objeto);
}
function obtenerEstudiantes() {
    return {
        data: estudiantes,
        total: estudiantes.length,
    };
}
var respuesta = obtenerEstudiantes();
console.log(respuesta.data);
console.log(respuesta.total);
