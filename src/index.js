import './style.css';
import sum from './functions.js';
import sayYes from './anotherFunctions.js';

// import Icon from './icon.png';


function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.textContent = "Hello, my name is Sol!!!!!!";
    element.className = 'hello';

      // Add the image to our existing div.
    // const myIcon = new Image();
    // myIcon.src = Icon;

    // element.appendChild(myIcon);
    return element;
  }

function sayHi() {
  return "Hello!";
}

function sayyes() {
  const h2 = document.createElement('h2');
  h2.textContent = sayYes();
  return h2;
}

function anotherFunction() {
  const p = document.createElement('p');
  p.textContent = "a dynamically created paragraph"
  return p;
}

function add() {
  const h1 = document.createElement('h1');
  h1.textContent = sum(1, 2);
  h1.style.color = 'red';
  return h1;
}
console.log(sayHi());
document.body.append(component(), anotherFunction(), add(), sayyes());