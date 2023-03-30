//Завдання 1
let h2 = document.querySelector('h2')
let h2Second = h2.nextElementSibling
h2Second.innerHTML = 'DOM method description'
console.log(h2Second);
//Завдання 2
/*let a = document.querySelectorAll('a')
console.log(a);
const divyArray = Array.from(a)
console.log(divyArray);
console.log(document.querySelectorAll('h2'));
*/

//Завдання 3

const ul = document.querySelector('ul')
console.log(ul);
const liFirst = ul.firstElementChild
const liSecond = document.createElement('li')
liFirst.after(liSecond)
liSecond.innerHTML = 2
liSecond.id = 'second' 
const liZero = document.createElement('li')
ul.prepend(liZero)
liZero.innerHTML = 0
liZero.id = 'zero'
const liFour = document.createElement('li')
ul.append(liFour)
liFour.innerHTML = 4
liFour.id = 'fourth'

