// Funcion que retorna el perimetro del cuadrado
const perimetroCuadrado = (lado) => lado * 4;

// Funcion que retorna el area del cuadrado
const areaCuadrado = (lado) => lado * lado;

// Funcion que retorna el perimetro del triangulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;

// Funcion que retorna el area del triangulo
const areaTriangulo = (base, altura) => (base * altura) / 2;

// Funcion que retorna el diametro del circulo
const diametroCirculo = (radio) => radio * 2;

// Funcion que retorna la circunferencia del circulo
const circunferenciaCirculo = (radio) => {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

// Funcion que retorna el area del circulo
const areaCirculo = (radio) => (radio * radio) * Math.PI;

// Codigo del Cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
//console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

//console.log(`El perimetro del cuadrado es: ${perimetroCuadrado(ladoCuadrado)} cm`);

//console.log(`El area del cuadrado es: ${areaCuadrado(ladoCuadrado)} cm^2`);

console.groupEnd();


// Codigo del Cuadrado
console.group("Triangulo")

const ladoTriangulo1 = 6;
const ladoTriangulo2= 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(`Los lados del triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm.`);
console.log(`La altura del triangulo es: ${alturaTriangulo}cm`);


//console.log(`El perimetro del triangulo es: ${perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo)}cm`);

//console.log(`El area del triangulo es: ${areaTriangulo(baseTriangulo, alturaTriangulo)}cm^2`);

console.groupEnd();


// Codigo  del circulo
console.group("Circulo");

const radioCirculo = 4;
console.log(`El radio del circulo es: ${radioCirculo}cm`);

//console.log(`El diametro del circulo es: ${diametroCirculo(radioCirculo)}cm`);

//console.log(`La circunferencia del circulo es: ${circunferenciaCirculo(radioCirculo)}cm`);

//console.log(`El area del circulo es: ${areaCirculo(radioCirculo)}cm^2`);

console.groupEnd();