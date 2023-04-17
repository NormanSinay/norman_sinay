function esVocal(caracter) {
    caracter = caracter.toLowerCase();
    return caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u';
}
let input = prompt("Introduzca un caracter:");
if (esVocal(input)) {
    alert("El caracter introducido es una vocal.");
} else {
    alert("El caracter introducido no es una vocal.");
}
