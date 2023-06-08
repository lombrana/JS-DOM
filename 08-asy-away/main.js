// console.log('> PEDIMOS UN POKEMON A LA API')

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then((res) => res.json())
// .then((response) => {
//     console.log('Respuesta:', response)
// })
// .catch((err) => {
//     console.log('Error', err)
// });

// console.log('>YA HEMOS PEDIDO UN POKEMON A LA API')

// metodo para que nuestro código se lea visualmente de arriba hacia abajo sin que tenga volver atrás.
// por debajo si que se comportara como un código asyncrono. Lo hacemos con la funcion
// Async away

const main = async () => {
  console.log("> PEDIMOS UN POKEMON A LA API");

  let pokemon = null;
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const response = await res.json();

    pokemon = response;

    console.log("Respuesta:", response);
  } catch (err) {
    console.log("Error", err);
  }

  console.log(">YA HEMOS PEDIDO UN POKEMON A LA API");
};

main().then(() => {
  console.log("La funcion main ha terminado");
});
