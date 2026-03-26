let infoCursos = {
    programacion: [
        {
            id: 1,
            titulo: 'Curso de JavaScript',
            nivel: 'Básico',
        },
        {
            id: 2, 
            titulo: 'Curso de Python',
            nivel: 'Intermedio',
        }, 
    ],
    matematicas: [ 
        {
            id: 1, 
            titulo: 'Curso de Álgebra',
            nivel: 'Básico'
        },
        {
            id: 2, 
            titulo: 'Curso de Cálculo',
            nivel: 'Avanzado'
        }, 
    ]
}

// exportamos el objeto infoCursos para que pueda ser utilizado en otros archivos
module.exports.infoCursos = infoCursos;