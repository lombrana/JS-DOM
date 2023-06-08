// console.log('PEDIMOS UN POKEMON A LA API')

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then((res) => res.json)
// .then((response) => {
//     console.log('RESPUESTA', response)

// })

// console.log('YA HEMOS PEDIDO EL POKEMON')

const main = async () => {
  console.log("PEDIMOS UN POKEMON A LA API");
  let pokemon = null;
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const response = await res.json();
        pokemon = response;

    console.log("RESPUESTA", response);

  } catch (err) {
    console.log("ERROR", err);
  };
};

main().then(() => {
    console.log('la funcion main ha terminado')
});
