
const onCompleteGame = () => {
  alert('Juego completado 🎉')
};

const buttonElement = document.querySelector('#complete-game');
buttonElement.addEventListener('click', onCompleteGame);


// 3º- creamos una const para guardar los textos p por donde pasamos
const pTextList = [];

// 2º - que funcion vamos a pasar

const onMouseMove = (event) => {
  // console.log(event.target.tagName)

  if (event.target.tagName === "P") {
    if (!pTextList.includes(event.target.className)) {
      pTextList.push(event.target.className);

      if(pTextList.length === 5) {  
        document.body.style.height = '200vh';
      }
    }
  }
};

let enteredPassword = false;

const onScroll = () => {
  if(!enteredPassword && window.scrollY > window.outerHeight /2) {
    const password = prompt('Introduce la contraseña:');

    if (password === '1234') {
      buttonElement.style.display = 'block';
      enteredPassword = true;
    }
  }

};

// target es por donde esta pasando el raton en ese momento
// cada vez que el raton se mueva por la pantalla,ese event tendra un punto target
// si ese targe es un texto p, vamos a hacer algo
// 1º - primer evento que vamos a escuchar en pantalla de manera global
// event.target va a ser el text p, y tiene un elemento: tagName
window.addEventListener("mousemove", onMouseMove);
// cuando se mueva por la ventana el mouse vamos a escucharlo y si
// pasa por un texto p activo lo que sea

// hacer event scroll

window.addEventListener('scroll', onScroll)
