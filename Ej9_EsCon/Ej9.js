alert("La calificación ingresada debe de ser sobre 10 puntos")
var numero = prompt("Ingrese su calificación:")

if (numero >= 0 && numero < 6) {
    alert("Calificación Insuficiente")
    console.log("Calificación Insuficiente")
} else if (numero >= 6 && numero < 7) {
    alert("Calificación Suficiente")
    console.log("Calificación Suficiente")
} else if (numero >= 7 && numero < 9) {
    alert("Calificación Buena")
    console.log("Calificación Buena")
} else if (numero >= 9 && numero <= 10) {
    alert("Calificación Excelente")
    console.log("Calificación Excelente")
}
