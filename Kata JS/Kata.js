//** Aplicación para consulta de pokemones */
const fetchPokemon = () => {                                  
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {                                //todo | Fetch: Función para consultar API
        if (res.status != "200") {                            //todo | Programación síncrona: Se lee de arriba hacia abajo corrido.
            console.log(res);                                 //todo | Programación asíncrona: Se lee de de arriba hacia abajo pero puede empezar a leer al mismo tiempo desde otras partes del código.
            pokeImage("./pokemon-sad.gif")                    //todo | Consulta a servidor es asíncrona, por lo que la lectura pasa de síncrona a asíncrona
        }                                                     //todo | Una "promesa" = THEN, es indicarle al código un delay time en lo que se obtiene información asíncrona para seguir corriendo síncrono
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
        }
    });
}
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");   //todo | document.getElementById("html ID"): se usa para buscar dentro del documento HTML un tag con ID ("")
    pokePhoto.src = url;                                    //todo | pokeName.value: obtiene el <valor> de la tag con ID <pokename> 
}

const fetchPokemonStatics = () => {                                  
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {                                
        if (res.status != "200") {                            //todo | Programación síncrona: Se lee de arriba hacia abajo corrido.
            console.log(res);                                 //todo | Programación asíncrona: Se lee de de arriba hacia abajo pero puede empezar a leer al mismo tiempo desde otras partes del código.
            pokeStatics("./pokemon-sad.gif")                    //todo | Consulta a servidor es asíncrona, por lo que la lectura pasa de síncrona a asíncrona
        }                                                     //todo | Una "promesa" = THEN, es indicarle al código un delay time en lo que se obtiene información asíncrona para seguir corriendo síncrono
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeStats = data.stats;
            pokeStatics(pokeStats);
            console.log(pokeStats);
        }
    });
}
const pokeStatics = (url) => {
    const pokeHab = document.getElementById("pokeStats");   //todo | document.getElementById("html ID"): se usa para buscar dentro del documento HTML un tag con ID ("")
    pokeHab.src = url;                                    //todo | pokeName.value: obtiene el <valor> de la tag con ID <pokename> 
}