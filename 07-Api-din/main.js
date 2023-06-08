const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/";

const searchInput = document.querySelector("#pokemon-search");
const searchButton = document.querySelector("#button-search");

const pokemonContainer = document.querySelector(".pokemon-container");
let currentPokemonId = 1;
let currentPokemon;
let pokemonRequest = [];

const renderPokemon = () => {
  const template = getPokemonTemplate();
  pokemonContainer.innerHTML += template;
};

const getPokemonTemplate = () => {
  return `
    <div class='pokemon'>
    <h3>${currentPokemon.name}</h3>
    <span>ID:${currentPokemon.id}</span>
    <image src='${currentPokemon.image}' alt='${currentPokemon.name}'/>
</div>
    `;
};

const fetchPokemon = () => {
  if (pokemonRequest.includes(currentPokemonId)) {
    return;
  } else {
    pokemonRequest.push(currentPokemonId);
  }
  fetch(`${POKEMON_URL}${currentPokemonId}`)
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      currentPokemon = {
        id: response.id,
        name: response.name,
        image: response.sprites.front_default,
      };
      renderPokemon();
    });
};

const handleSearch = () => {
  const inputValue = searchInput.valueAsNumber;
  currentPokemonId = inputValue;
  fetchPokemon();
  // const inputValue = event.target.valueAsNumber;
  // currentPokemonId = inputValue;
};

searchInput.value = currentPokemonId;
// searchInput.addEventListener('input', handleSearch)
fetchPokemon();
searchButton.addEventListener("click", handleSearch);
