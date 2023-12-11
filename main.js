const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const result = document.querySelector(".result");
const btn = document.querySelector(".calcular");

form.addEventListener("submit", sumar);// para evitar el submit, agregamos el atributo type="button" a la etiqueta button
                                       // y el evento sigue siendo click y se evita event.preventDefault();

function sumar(event){
   event.preventDefault();//Evita que la pagina se refresque al dar click al boton
   const suma = parseInt(num1.value) + parseInt(num2.value);
   result.innerHTML = "Este es el resultado de la suma de los dos números: " + suma;//Insertamos texto a una etiqueta html
}
