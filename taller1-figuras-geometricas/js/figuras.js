//----------------------FUNCIONES------------

// Funciones Cuadrado
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;

// Funciones Triangulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;
const alturaTrianguloIsosceles = (lado1, base) => Math.sqrt( Math.pow(lado1, 2) - ( Math.pow(base, 2) / 4 ) );
const alturaTrianguloEquilatero = (lado1) => Math.sqrt(3 * lado1) / 2;
const alturaTrianguloEscaleno = (lado1, lado2, base) => {
    const semiperimetro = (lado1 + lado2 + base) / 2;
    return ((2 / base) * Math.sqrt( semiperimetro * ( semiperimetro - base ) * ( semiperimetro - lado1 ) * ( semiperimetro - lado2 ) ) );
};

// Funciones Circulo
const diametroCirculo = (radio) => radio * 2;
const areaCirculo = (radio) => (radio * radio) * Math.PI;
const circunferenciaCirculo = (radio) => {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}


//--------------------INTERACCION HTML----------

//  Variables para el cuadrado
const cuadradoLado = document.getElementById("square-side");
const cuadradoResultado = document.getElementById("square-result");

//  Variables para el triangulo
const trianguloLado1 = document.getElementById("triangle-side1");
const trianguloLado2 = document.getElementById("triangle-side2");
const trianguloBase = document.getElementById("triangle-base");
const trianguloAlto = document.getElementById("triangle-height");
const trianguloResultado = document.getElementById("triangle-result");

//  Variables para el circulo
const circuloRadio = document.getElementById("circle-radius");
const circuloResultado = document.getElementById("circle-result");

//  Funciones para enciar el resultado del cuadrado al HTML
function calcularPerimetroCuadrado() {
    const ladoCuadrado = parseInt(cuadradoLado.value);

    const perimetro = perimetroCuadrado(ladoCuadrado);

    if ( isNaN(perimetro) ) {
        cuadradoResultado.innerHTML = 'Ups! Parece que te falto anadir un valor <br>Intentalo de Nuevo!';
    } else {
        cuadradoResultado.innerHTML = `El diametro es: ${perimetro} cm`;       
    }
}

function calcularAreaCuadrado() {
    const ladoCuadrado = parseInt(cuadradoLado.value);

    const area = areaCuadrado(ladoCuadrado);

    if ( isNaN(area) ) {
        cuadradoResultado.innerHTML = `Ups! Parece que te falto anadir un valor <br>Intentalo de Nuevo!`;
    } else {
        cuadradoResultado.innerHTML = `El area es: ${area} cm<sup>2</sup>`;
    }
}

//  Funciones para enciar el resultado del triangulo al HTML
function calcularPerimetroTriangulo() {
    const lado1 = parseInt(trianguloLado1.value);
    const lado2 = parseInt(trianguloLado2.value);
    const base = parseInt(trianguloBase.value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);

    if ( isNaN(perimetro) ) {
        trianguloResultado.innerHTML = `Ups! Parece que te falto anadir un valor <br>Intentalo de Nuevo!`;
    } else {
        trianguloResultado.innerHTML = `El perimetro es: ${perimetro} cm`
    }
}

function calcularAreaTriangulo() {
    const base = parseInt(trianguloBase.value);
    const altura = parseInt(trianguloAlto.value);

    const area = areaTriangulo(base, altura);

    if ( isNaN(area) ) {
        trianguloResultado.innerHTML = `Ups! Parece que te falto anadir un valor <br>Intentalo de Nuevo!`;
    } else {
        trianguloResultado.innerHTML = `El area es: ${area} cm<sup>2</sup>`;
    }
}

function calcularAlturaTriangulo() {
    const lado1 = parseInt(trianguloLado1.value);
    const lado2 = parseInt(trianguloLado2.value);
    const base = parseInt(trianguloBase.value);
    let triangulo;
    let altura;

    if (lado1 == lado2 && lado1 == base) {
        // Altura para triangulo equilatero
        altura= alturaTrianguloEquilatero(lado1);
        triangulo = 'Equilatero';

    } else if (lado1 == lado2) {
        // Altura para triangulo isosceles
        altura = alturaTrianguloIsosceles(lado1, base);
        triangulo = 'Isosceles';
    } else {
        // Altura para triangulo escaleno
        altura = alturaTrianguloEscaleno(lado1, lado2, base);
        triangulo = 'Escaleno';
    }

    if ( isNaN(altura) ) {
        trianguloResultado.innerHTML = `Ups! Parece que te falto anadir un valor <br>Intentalo de Nuevo!`;
    } else {
        trianguloResultado.innerHTML = `El triangulo es: ${triangulo} <br>La altura es:${altura.toFixed(2)} cm`;
    }
}

//  Funciones para enciar el resultado del circulo al HTML
function calcularDiametroCirculo() {
    const radio = parseInt(circuloRadio.value);

    const diametro = diametroCirculo(radio);

    if ( isNaN(diametro) ) {
        circuloResultado.innerHTML = `Ups! Parece que te falto anadir un valor <br>Intentalo de Nuevo!`;
    } else {
        circuloResultado.innerHTML = `El diametro es: ${diametro} cm`;
    }
}

function calcularAreaCirculo() {
    const radio = parseInt(circuloRadio.value);

    const area = areaCirculo(radio);

    if ( isNaN(area) ) {
        circuloResultado.innerHTML = `Ups! Parece que te falto anadir un valor <br>Intentalo de Nuevo!`;
    } else {
        circuloResultado.innerHTML = `El area es: ${area.toFixed(2)} cm<sup>2</sup>`;
    }
}

function calcularCircunferenciaCirculo() {
    const radio = parseInt(circuloRadio.value);

    const circunferencia = circunferenciaCirculo(radio);

    if ( isNaN(circunferencia) ) {
        circuloResultado.innerHTML = `Ups! Parece que te falto anadir un valor <br>Intentalo de Nuevo!`;
    } else {
        circuloResultado.innerHTML = `la circunferencia es: ${circunferencia.toFixed(2)} cm`;
    }
}