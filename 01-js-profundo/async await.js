
function obtenerDatos(){
    return new Promise((resolve, reject) => {
        const error = false
        setTimeout(() => {
            if (error){
                return reject("Error al obtener datos");
            }else{
                return resolve("Datos obtenidos");
            }
        }, 2000);
    });
}

async function ejecutar(){
    try {
        const datos = await obtenerDatos();
        console.log(datos);
    } catch (error) {
        console.log(error);
    }
}

ejecutar();