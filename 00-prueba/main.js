const pTextList = [];

const onMouseMove = (event) => {
  // console.log(event.target.tagName)
  if (event.target.tagName === "p") {
    if (!pTextList.includes(event.target.className)) {
      pTextList.push(event.target.className);

      if(pTextList.length === 5) {
        document.body.style.height = '250vh';
      }
    }
  }
//   console.log(pTextList);
};

const onScroll = () => {

    if(window.scrollY > window.outerHeight /2) {
            console.log('has escroleado mas de la mitad');

    }
};

window.addEventListener("mousemove", onMouseMove);
window.addEventListener("scroll", onScroll);

const onCompleteGame = () => {

}
const buttonElement = document.querySelector('#complete-game');
buttonElement.addEventListener('click', onCompleteGame)