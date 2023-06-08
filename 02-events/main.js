
let inputValue = ''

const onButtonClicked = () => {
    alert(`El input tiene como valor ${inputValue}`)
}
// alert solo puede tener un solo argu
// ¿como añado esta función a mi button?
// añado al elemento de HTML la funcion que quiero que se invoque

// const onInputChanged = (input) => {
//     // el argumento input hace referencia a dicho que input que quiero cambiar.No se pone this pq es una
//     // palabra reservada. Ahora input va a tener una propiedad .value. Ahora la let universal inputValue va a reasignarse para que valga
//     // para valer lo que vale input.value

//     inputValue = input.value;
//     const inputTextH3 = document.querySelector('#input-text');
//     inputTextH3.innerText = inputValue;

// }
// cada vez que cambie el input quiere lanzar una función
// input tien como propiedad .value

const onInputChanged = (event) => {
    inputValue = event.target.value;
    // input va viene introducido dentor del arg event

    const inputTextH3 = document.querySelector('#input-text');
    inputTextH3.innerText = inputValue;
};

const buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', onButtonClicked);

const inputElement = document.querySelector('input[type="text"]');
inputElement.addEventListener('input', onInputChanged);

// cada vez que tengo un elemento en un addEvenListener recibe siempre un event/ev/e
