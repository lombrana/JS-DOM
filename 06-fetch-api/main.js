const POKEAPI_URL = "https://pokeapi.co/api/v2/";

const searchUrl = `${POKEAPI_URL}pokemon/ditto`;
const pokemonContainer = document.querySelector("#pokemon-container");

let pokemonData;

const renderPokemon = () => {
  const pokemonTemplate = `
    <div class='pokemon'>
    <span>ID: ${pokemonData.id}</span>
    <h3>${pokemonData.name}</h3>
    <image src='${pokemonData.image}' alt='${pokemonData.name}'
    </div>
   `;

  pokemonContainer.innerHTML += pokemonTemplate;
};

fetch(searchUrl)
  .then((res) => res.json())
  .then((response) => {
    pokemonData = {
      id: response.id,
      name: response.name,
      image: response.sprites.front_default,
    };

    renderPokemon();
  });
