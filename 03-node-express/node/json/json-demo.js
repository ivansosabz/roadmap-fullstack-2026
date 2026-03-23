const curso = require('./curso.json');

console.log(curso.temas[1]);

// para convertir un objeto a JSON, usamos JSON.stringify
const cursoJSON = JSON.stringify(curso);
console.log(cursoJSON);
// para convertir un JSON a un objeto, usamos JSON.parse
const cursoObjeto = JSON.parse(cursoJSON);
console.log(cursoObjeto.titulo);