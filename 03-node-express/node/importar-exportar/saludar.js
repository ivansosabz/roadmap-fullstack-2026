function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
function despedir(nombre) {
    return `Adiós, ${nombre}!`;
}
// forma 1
/*
    module.exports.saludar = saludar;
    module.exports.despedir = despedir;
*/ 
// forma 2
module.exports = {
    saludar: saludar,
    despedir: despedir
};
 