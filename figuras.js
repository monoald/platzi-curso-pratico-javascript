//----------------------FUNCIONES------------

// Funciones Cuadrado
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;

// Funciones Triangulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

// Funciones Circulo
const diametroCirculo = (radio) => radio * 2;
const areaCirculo = (radio) => (radio * radio) * Math.PI;
const circunferenciaCirculo = (radio) => {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}


//--------------------INTERACCION HTML----------

//  Variables para el cuadrado
const input = document.getElementById("square-entry");
let result = document.getElementById("square-result");

function calcularPerimetroCuadrado() {
    const value = parseInt(input.value);

    const perimetro = perimetroCuadrado(value);

    result.innerHTML = `El diametro es: ${perimetro} cm`;
}

function calcularAreaCuadrado() {
    const value = parseInt(input.value);

    const area = areaCuadrado(value);

    result.innerHTML = `El area es: ${area} cm<sup>2</sup>`;
}