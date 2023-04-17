alert("Ingrese tres notas de diferentes cursos y el programa le indicara si aprobó o reprobó.")
alert("Las notas se califican sobre 10 puntos.")
var nota1 = parseFloat(prompt("Ingrese la primera nota: "))
var nota2 = parseFloat(prompt("Ingrese la segunda nota: "))
var nota3 = parseFloat(prompt("Ingrese la tercera nota: "))

var promedio = (nota1 + nota2 + nota3) / 3

if (promedio >= 3) {
  if (promedio >= 4.5) {
    alert("Excelente! Tu promedio es de " + promedio.toFixed(2) + " y obtuviste una calificación A")
    console.log("Excelente! Tu promedio es de " + promedio.toFixed(2) + " y obtuviste una calificación A")
  } else if (promedio >= 3.5) {
    alert("Muy bien! Tu promedio es de " + promedio.toFixed(2) + " y obtuviste una calificación B")
    console.log("Muy bien! Tu promedio es de " + promedio.toFixed(2) + " y obtuviste una calificación B")
  } else {
    alert("Bien! Tu promedio es de " + promedio.toFixed(2) + " y obtuviste una calificación C")
    console.log("Bien! Tu promedio es de " + promedio.toFixed(2) + " y obtuviste una calificación C")
  }
} else {
  alert("Lo siento, no aprobaste la materia. Tu promedio es de " + promedio.toFixed(2))
  console.log("Lo siento, no aprobaste la materia. Tu promedio es de " + promedio.toFixed(2))
}
