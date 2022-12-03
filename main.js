const h1 = document.querySelector('h1');
const pimg = document.querySelector('#parrafo');
const input = document.querySelector('input');
const pResult = document.getElementById('result');

h1.innerText = 'Hello World!';

//modificar atributos
h1.getAttribute('pantalla');
h1.setAttribute('pantalla', 'hola');
console.log(h1.getAttribute('pantalla'));

h1.classList.add('pantalla');
h1.classList.remove('pantalla');

input.value = 'Juan';

//Crear elementos
const img = document.createElement('img');
img.setAttribute('src', 'https://placeimg.com/200/200/animals');

pimg.append(img);

//Eventos
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');

let btnCalc = document.getElementById('btnCalc');
let form = document.getElementById('form');

form.addEventListener('submit', Calc);

/**
 * When the user clicks the button, prevent the default action, then add the values of the two input
 * fields and display the result in the paragraph.
 * @param event - The event object is a parameter that is passed to the function when it is invoked.
 */
function Calc(event){
    event.preventDefault();
    let sum = (n1.value + n2.value);
    pResult.innerText = sum;
}
