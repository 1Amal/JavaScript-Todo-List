import "./index.css";
console.log("JS Added");

function component() {
    const element = document.createElement('div');
 
    // Lodash, now imported by this script
    element.innerHTML = "Hello Webpack";
   element.classList.add('hello');
 
    return element;
  }
 
  document.body.appendChild(component());