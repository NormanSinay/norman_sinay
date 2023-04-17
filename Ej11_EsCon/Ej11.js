let num1 = parseFloat(prompt("Ingrese el primer número: "))
let num2 = parseFloat(prompt("Ingrese el segundo número: "))

if (num1 > num2) {
    alert("El primer número es mayor.")
} else if (num2 > num1) {
    alert("El segundo número es mayor.")
} else {
    alert("Los dos números son iguales.")
}

let resultado = num1 > num2 ? "El primer número es mayor." : num2 > num1 ? "El segundo número es mayor." : "Los dos números son iguales.";

console.log(resultado);