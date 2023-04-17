alert("Seleccione un Color")
var coloresPosibles = ["rojo", "anaranjado", "amarillo", "verde", "celeste", "azul"]
var color = prompt("Ingrese un color seleccionado:")

var encontrado = false

for (var i = 0; i < coloresPosibles.length; i++) {
    if (coloresPosibles[i] === color) {
        alert("¡Has acertado! El color " + color + " está en la lista.")
        console.log("¡Has acertado! El color " + color + " está en la lista.")
        encontrado = true
        break
    }
}
if (!encontrado) {
    alert("Lo siento, el color " + color + " no está en la lista.")
    console.log("Lo siento, el color " + color + " no está en la lista.")
}
