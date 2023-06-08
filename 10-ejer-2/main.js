// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const divVacio = document.createElement("div");
divVacio.className = "vacio";
console.log(divVacio);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const tagP = document.createElement("p");
divVacio.append(tagP);
const text = document.createTextNode("hola mundo");
tagP.append(text);
document.body.append(divVacio);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// loop con javascript.

const insert = () => {
  const listNames = document.createElement("div");

  for (let i = 0; i < 6; i++) {
    const paraphahs = document.createElement("p")[6];

    listNames.append(paraphahs);
  }
  document.body.append(listNames);
};

insert();

// 2.4 Inserta dinamicamente con javascript en un html una p con el
// texto 'Soy dinámico!'.

const textOne = document.createElement("p");
textOne.innerHTML = "Soy dinámico";
document.body.append(textOne);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector(".fn-insert-here");
const textH2 = document.createTextNode("Wubba Lubba dub dub");
h2.append(textH2);

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const setupAppsList = () => {
  const listUl = document.createElement("ul");

  for (let i = 0; i < apps.length; i++) {
    const element = apps[i];
    const elementLi = document.createElement("li");
    elementLi.innerText = element;

    listUl.append(elementLi);
    console.log(listUl);
  }
  document.body.append(listUl);
};

setupAppsList();

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

// const endNodos = document.querySelectorAll('p.fn-remove-me')
// endNodos.remove();


// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.

const selectDiv = document.querySelector('div');

const createP = document.createElement('p');
selectDiv.append(createP);

const textP = document.createTextNode('VOY EN MEDIO!');
createP.append(textP);

document.body.append(selectDiv)
console.log(selectDiv)


// Recuerda que no solo puedes insertar elementos con .appendChild.
// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// .fn-insert-here
// const newP = document.createElement('p');
// const textNewP = document.createTextNode('Voy dentro!');
// newP.append(textNewP);

// const select = document.getElementsByClassName('fn-insert-here')
// select.append(newP)

