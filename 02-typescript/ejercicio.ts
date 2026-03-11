// creando los modelos
interface Curso {
    id: number;
    nombre: string;
    duracion: number;
}

interface Estudiante {
    id: number;
    nombre: string;
    activo: boolean;
    curso: Curso;
}

type Nivel = "basico" | "intermedio" | "avanzado"
// creación de cursos
const cursos: Curso[] = [
    {
        id: 1,
        nombre: "TypeScript",
        duracion: 20,
    },{
        id: 2,
        nombre: "Node",
        duracion: 30,
    }
]
// creación de estudiantes
const estudiantes: Estudiante[] = [
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
]

// crear funciones tipadas: función para mostrar estudiantes

function mostrarEstudiantes(lista: Estudiante[]) {
    lista.forEach(estudiante => {
        console.log(`${estudiante.nombre}: ${estudiante.activo}`);
    })
}

mostrarEstudiantes(estudiantes);

// función para crear curso
function crearCurso(nombre: string, duracion: number): Curso {
    return {
        id: Math.random(),
        nombre,
        duracion
    }
}

// función para agregar id a cualquier objeto
function agregarId<T>(objeto: T):T & {id: number}{
    return {
        id: Math.floor(Math.random() *1000),
        ...objeto,
    }
}

// simulador de respuesta Api
interface EstudiantesResponse {
    data: Estudiante[]
    total: number
}
function obtenerEstudiantes(): EstudiantesResponse {
    return {
        data: estudiantes,
        total: estudiantes.length,
    }
}

const respuesta = obtenerEstudiantes()
console.log(respuesta.data)
console.log(respuesta.total)