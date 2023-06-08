
const fruits = [
    'pera',
    'manzana',
    'fresa',
]

const listFruits = document.getElementsByTagName('div');
for(let i = 0; i < fruits.length; i ++) {
    const fruit = fruits[i];

    const li = document.createElement('li')
    li.append(fruit);
    listFruits.appendChild(li)
}
