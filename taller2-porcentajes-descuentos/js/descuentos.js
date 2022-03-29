//  Funcion para calcular el precio con descuento
const calcularPrecioconDescuento = (precio, descuento) => {
    return ( precio * ( 100 - descuento ) ) / 100;
}; 