// queremos elegir h1. primero lo asignamos a una const

const title = document.querySelector('h1')
console.log(title)
// querySelector() es una función que recibe algo. Busca el 
// el primer Element que sea h1 y solo almacena uno.
title.innerText ='Aprendemos Selectores con JS'
// podemos cambiar el texto de h1


const secondTitle = document.querySelector('h2')
console.log('Second title', secondTitle);

// const thirdTitle = document.getElementById('school')
const thirdTitle = document.querySelector ('#school')
console.log('thirdtitle :', thirdTitle)

// const technologies = document.getElementsByClassName('technology')
const technologies = document.querySelectorAll('.technology')
console.log('Technologies:', technologies)
// getElementsByClassName esta plural pq es un array. Pero no es un array
// como tal, es un array HTML. Es una coleccion de elem HTML que tienen unas funciones parecidas a un array
// no es un array como tal. hay muchas funione sde array que no se pueden aplicar a este HTML collection.
// ¿cómo recorro este array? Poner indice a la lista con js

for ( let i = 0; i < technologies.length; i ++){
    const technology = technologies[i];
    const prevTex = technology.innerText; /*guarda el texto de la linea*/
    technology.innerText = `${i + 1} - ${prevTex}`
}

// .querySelectorAll() => nos  da un array de nodos, pero que podemos aplicarle los
// las mismas funciones que aplicamos a class name.
const THEPOWER_URL = 'https://www.thepowermba.com/es/';
const titleLink = document.querySelector('h2.title_link > a')
console.log('Title link', titleLink);
titleLink.href = THEPOWER_URL;

