var totalCompra = parseFloat(prompt("Ingrese el total de la compra:"));

var descuento = 0;

switch (true) {
    case (totalCompra < 100):
        alert("No hay descuento.")
        console.log("No hay descuento.")
        break
    case (totalCompra >= 100 && totalCompra <= 300):
        descuento = 0.05;
        alert(`Se le aplica un descuento del ${descuento * 100}%.`)
        console.log(`Se le aplica un descuento del ${descuento * 100}%.`)
        break
    case (totalCompra > 300 && totalCompra <= 500):
        descuento = 0.1
        alert(`Se le aplica un descuento del ${descuento * 100}%.`)
        console.log(`Se le aplica un descuento del ${descuento * 100}%.`)
        break
    case (totalCompra > 500 && totalCompra <= 1000):
        descuento = 0.15;
        alert(`Se le aplica un descuento del ${descuento * 100}%.`)
        console.log(`Se le aplica un descuento del ${descuento * 100}%.`)
        break
    default:
        alert("El monto ingresado es inválido.")
        console.log("El monto ingresado es inválido.")
        break
}

let totalConDescuento = totalCompra - (totalCompra * descuento);
alert(`El total de la compra con descuento es: ${totalConDescuento} quetzales.`)
alert(`Gracias por su preferencia.`)
console.log(`El total de la compra con descuento es: ${totalConDescuento} quetzales.`)
