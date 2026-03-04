const fragmento = document.createDocumentFragment(); //sirve para crear elementos en memoria y luego insertarlos en el DOM de una sola vez, mejorando el rendimiento 
const main = document.querySelector("main"); //sirve para seleccionar el elemento main del documento
const template = document.createElement("template"); //sirve para crear un elemento template
main.innerHTML = ""; //sirve para limpiar el contenido del elemento main 

const apiRequest = async () => {
    // aqui vamos a crear la petición a la API
    for (let i = 1; i <= 151; i++) {
        try {
            const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const data = await respuesta.json();
            if (data) {
                paintPokemon(data);
            }
        } catch (error) {
            console.log("Error al obtener el pokemon", error);
        }
    }

};
const paintPokemon = (data) => {
    // aqui vamos a pintar los datos en el DOM
    try {
        // primero se evalua si la data vino bien
        if (data) {
            template.innerHTML = `
            <div class="card">
                <img
                    loading="lazy" 
                    class="card-img-top"
                    src="${data.sprites.other.dream_world.front_default}" 
                    alt="${data.name}"
                >
                <h2 class="card-title">${data.name}</h2>
                <div class="types">${
                // data.types.map(type => `<p class="card-text">${type.type.name}</p>`).join("")
                data.types.map(type => {
                    // nombre del tipo del pokemon
                    const typePokemon = type.type.name
                    return `<span class="pokemon-type-span pokemon-type-${typePokemon}">${typePokemon}</span>`
                }).join("")
                }</div>
            </div>
            `;
            const cloneTemplate = template.content.cloneNode(true);
            fragmento.appendChild(cloneTemplate);
            main.appendChild(fragmento);
        }

    } catch (error) {
        console.log("Error al pintar el pokemon", error);
    }

};
const paintPokemonForType = async (btnId) => {
    console.log(btnId);
    main.innerHTML = "";
    for (let i = 1; i <= 151; i++) {
        try {
            const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const data = await respuesta.json();
            if (data) {
                const typesPokemon = data.types.map(type => type.type.name);
                console.log(typesPokemon);
                if(btnId === "all"){
                    paintPokemon(data);
                }else 
                    if(typesPokemon.some(typePokemon => typePokemon.includes(btnId))){
                        paintPokemon(data);
                    }
            }
        } catch (error) {
            console.log("Error al obtener el pokemon", error);
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    apiRequest();
    //aqui vamos a crear el evento click para los botones de tipos, el DOMContentLoaded es para que se ejecute cuando el DOM este cargado
});

document.addEventListener("click", (e) => {

    if(e.target.classList.contains("btn-types")){
        console.log(event.target.id);
        paintPokemonForType(event.target.id);
    }
});