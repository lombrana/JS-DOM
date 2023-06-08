// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const buttom = document.querySelector('.showme')
console.log(buttom)

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const title = document.querySelector('#pillado')
console.log(title)

// 1.3 Usa querySelector para mostrar por consola todos los p
const text = document.querySelectorAll('p')
console.log(text)

// 1.4 Usa querySelector para mostrar por consola todos los elementos con
// la clase.pokemon
const pokemon = document.querySelectorAll('.pokemon')
console.log(pokemon)

// 1.5 Usa querySelector para mostrar por consola todos los elementos con
// el atributo data-function="testMe".
const test = document.querySelectorAll('data-function')
console.log(test)

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
// data-function="testMe".
const figure = document.querySelectorAll('span [data-funcion-3]')
console.log(figure)