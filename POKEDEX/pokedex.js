
function buscarPokemon(numeroContenedor)
{
    let inputId = document.getElementById(`pokemonInput${numeroContenedor}`);
    let nombrePokemon = inputId.value.trim().toLowerCase();
    let urlApi = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;
    fetch(urlApi)
    .then(response => response.json())
    .then(datosPokemon => mostrarPokemon(datosPokemon, numeroContenedor))
    .catch(() => mostrarError(numeroContenedor,nombrePokemon))
}

function mostrarPokemon(datosPokemon,numeroContenedor)
{
    let infoDiv = document.getElementById(`pokemonInfo${numeroContenedor}`);

    infoDiv.innerHTML = `
    <h2 class="pk-name">${datosPokemon.name.toUpperCase()}</h2>
    <img class="pk-img" src="${datosPokemon.sprites.other["official-artwork"].front_default}">
    <p>Número: ${datosPokemon.id}</p>
    <p>Peso: ${datosPokemon.weight/10}kg</p>
    <p>Altura: ${datosPokemon.height/10}m</p>

    `
}

function mostrarError(numeroContenedor,nombrePokemon)
{
    let infoDiv = document.getElementById(`pokemonInfo${numeroContenedor}`);
    infoDiv.innerHTML = `<p>${nombrePokemon} no existe</p>`
}

window.onload = function()
{
    document.getElementById("pokemonInput1").value = "25";
    buscarPokemon(1);

    document.getElementById("pokemonInput2").value = "4";
    buscarPokemon(2);

    document.getElementById("pokemonInput3").value = "1";
    buscarPokemon(3);
}