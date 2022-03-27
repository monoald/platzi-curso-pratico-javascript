//-----------------------------INTERACCION MENU-----------------------

//  Obtener las secciones para mostrarlas y ocultarlas
const cuadrado = document.getElementById("square-form");
const triangulo = document.getElementById("triangle-form");
const circulo = document.getElementById("circle-form");

//  Obtener el nombre del para activarlo visualmente
const cuadradoActivo = document.getElementById("square");
const trianguloActivo = document.getElementById("triangle");
const circuloActivo = document.getElementById("circle");

function mostrarFormularioCuadrado() {
    cuadrado.setAttribute("style", "display: grid;");
    triangulo.setAttribute("style", "display: none;");
    circulo.setAttribute("style", "display: none;");
    cuadradoResultado.innerHTML = "";
    cuadradoLado.value = "";
}

function mostrarFormularioTriangulo() {
    cuadrado.setAttribute("style", "display: none;");
    triangulo.setAttribute("style", "display: grid;");
    circulo.setAttribute("style", "display: none;");
    trianguloResultado.innerHTML = "";
    trianguloLado1.value = "";
    trianguloLado2.value = "";
    trianguloAlto.value = "";
    trianguloBase.value = "";
    
}

function mostrarFormularioCirculo() {
    cuadrado.setAttribute("style", "display: none;");
    triangulo.setAttribute("style", "display: none;");
    circulo.setAttribute("style", "display: grid;");
    circuloResultado.innerHTML = "";
    circuloRadio.value = "";
}

//----------------------------ITEM ACTIVO-----------------

const activo = document.querySelectorAll(".menu__item");

activo.forEach( (item) => 
    item.addEventListener("click", itemActivo)
);

function itemActivo() {
    activo.forEach( (item) => 
        item.classList.remove("active") 
    );

    this.classList.add("active");
}