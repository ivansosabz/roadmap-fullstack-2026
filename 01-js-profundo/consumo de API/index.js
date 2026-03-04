/*
=====================================================
VARIABLES PRINCIPALES DEL DOM
=====================================================
*/

// Crea un fragmento de documento.
// Sirve para construir varios elementos en memoria
// antes de insertarlos al DOM real.
// Esto mejora el rendimiento porque evita múltiples
// re-renderizados del navegador.
const fragmento = document.createDocumentFragment();

// Selecciona el elemento <main> del HTML.
// Aquí es donde se mostrarán las tarjetas de Pokémon.
const main = document.querySelector("main");

// Crea un elemento <template>.
// Los templates sirven como "molde" para generar
// HTML dinámicamente sin insertarlo directamente
// en el DOM hasta que sea necesario.
const template = document.createElement("template");

// Limpia el contenido del main al iniciar.
main.innerHTML = "";


/*
=====================================================
FUNCIÓN PARA OBTENER LOS POKÉMON DESDE LA API
=====================================================
*/

const apiRequest = async () => {

    /*
    Esta función hace peticiones a la API de Pokémon.

    async permite usar "await", lo que hace que el código
    espere la respuesta de la API antes de continuar.
    */

    for (let i = 1; i <= 151; i++) {

        /*
        Este bucle obtiene los primeros 151 Pokémon
        (los de la primera generación).
        */

        try {

            // fetch realiza la petición HTTP a la API
            const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);

            // Convierte la respuesta a formato JSON
            const data = await respuesta.json();

            // Si los datos existen, se envían para ser pintados en pantalla
            if (data) {
                paintPokemon(data);
            }

        } catch (error) {

            // Si ocurre un error en la petición se muestra en consola
            console.log("Error al obtener el pokemon", error);

        }
    }
};


/*
=====================================================
FUNCIÓN PARA PINTAR EL POKÉMON EN EL DOM
=====================================================
*/

const paintPokemon = (data) => {

    /*
    Esta función recibe los datos de un Pokémon
    y crea una tarjeta HTML con su información.
    */

    try {

        // Primero se verifica que existan datos
        if (data) {

            /*
            Creamos el HTML dinámicamente usando template strings.
            Se insertan datos como:
            - nombre del Pokémon
            - imagen
            - tipos
            */

            template.innerHTML = `
            <div class="card pokemon-card">
                <div class="card-image-wrapper">
                    <img
                        loading="lazy" 
                        class="card-img-top pokemon-img"
                        src="${data.sprites.other.dream_world.front_default}" 
                        alt="${data.name}"
                    >
                </div>

                <div class="card-body">

                    <h2 class="card-title text-capitalize">
                        ${data.name}
                    </h2>

                    <div class="types d-flex justify-content-center gap-2">

                    ${
                /*
                data.types es un array con los tipos del Pokémon.

                Ejemplo:
                [
                    { type: { name: "grass" } },
                    { type: { name: "poison" } }
                ]
                */

                data.types.map(type => {

                    // obtenemos el nombre del tipo
                    const typePokemon = type.type.name

                    // devolvemos un span con clase dinámica
                    return `
                            <span class="pokemon-type-span pokemon-type-${typePokemon}">
                                ${typePokemon}
                            </span>
                            `

                }).join("")

                /*
                map transforma cada tipo en HTML.
                join("") une todos los elementos en un solo string.
                */
                }

                    </div>
                </div>
            </div>
            `;

            /*
            Clonamos el contenido del template.
            cloneNode(true) copia toda la estructura HTML.
            */
            const cloneTemplate = template.content.cloneNode(true);

            // Insertamos el clon en el fragmento
            fragmento.appendChild(cloneTemplate);

            // Finalmente insertamos el fragmento en el DOM real
            main.appendChild(fragmento);
        }

    } catch (error) {

        // Manejo de errores al pintar
        console.log("Error al pintar el pokemon", error);

    }

};


/*
=====================================================
FUNCIÓN PARA FILTRAR POKÉMON POR TIPO
=====================================================
*/

const paintPokemonForType = async (btnId) => {

    /*
    btnId corresponde al ID del botón presionado.
    Por ejemplo:
    "fire"
    "water"
    "grass"
    */

    console.log(btnId);

    // Limpiamos el contenido antes de volver a pintar
    main.innerHTML = "";

    for (let i = 1; i <= 151; i++) {

        try {

            const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const data = await respuesta.json();

            if (data) {

                /*
                Creamos un array con los tipos del Pokémon
                */

                const typesPokemon = data.types.map(type => type.type.name);

                console.log(typesPokemon);

                /*
                Si el botón es "all"
                mostramos todos los Pokémon
                */

                if (btnId === "all") {

                    paintPokemon(data);

                } else

                    /*
                    some() revisa si algún tipo del Pokémon
                    coincide con el tipo seleccionado.
                    */

                    if (typesPokemon.some(typePokemon => typePokemon.includes(btnId))) {

                        paintPokemon(data);

                    }
            }

        } catch (error) {

            console.log("Error al obtener el pokemon", error);

        }
    }
};


/*
=====================================================
EVENTO CUANDO EL DOM ESTÁ LISTO
=====================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /*
    DOMContentLoaded se dispara cuando todo el HTML
    ya fue cargado en el navegador.

    Aquí iniciamos la carga de los Pokémon.
    */

    apiRequest();

});


/*
=====================================================
EVENTO DE CLICK PARA FILTRAR POKÉMON
=====================================================
*/

document.addEventListener("click", (e) => {

    /*
    Usamos delegación de eventos.

    En lugar de agregar un evento a cada botón,
    escuchamos todos los clicks del documento.
    */

    if (e.target.classList.contains("btn-types")) {

        /*
        Si el elemento clickeado tiene la clase
        "btn-types", entonces es uno de los botones
        de filtro.
        */

        console.log(e.target.id);

        // Llamamos a la función de filtrado
        paintPokemonForType(e.target.id);

    }
});