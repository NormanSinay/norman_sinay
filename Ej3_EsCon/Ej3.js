var nombre = prompt("Ingrese Su Nombre: ")
var edad = prompt("Ingrese Su Edad: ")
var pais = prompt("Ingrese Su De Origen País: ")

if (edad >= 18){
    alert(nombre + " es mayor de edad" + " y es de " + pais)
    console.log(nombre + " es mayor de edad" + " y es de " + pais)
}else{
    alert(nombre + " es menor de edad" + " y es de " + pais)
    console.log(nombre + " es menor de edad" + " y es de " + pais);
}