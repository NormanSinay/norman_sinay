alert("Meses del año: 1-Enero 2-Febrero 3-Marzo 4-Abril 5-Mayo 6-Junio 7-Julio 8-Agosto 9-Septiembre 10-Octubre 11-Noviembre 12-Diciembre")
var mes = parseInt(prompt("Ingrese el número de mes (1-12):"))

var estacion = "";

switch (mes) {
  case 12:
  case 1:
  case 2:
    estacion = "invierno"
    break
  case 3:
  case 4:
  case 5:
    estacion = "primavera"
    break
  case 6:
  case 7:
  case 8:
    estacion = "verano"
    break
  case 9:
  case 10:
  case 11:
    estacion = "otoño"
    break
  default:
    alert("El mes ingresado no es válido.")
    console.log("El mes ingresado no es válido.")
    break
}

if (estacion !== "") {
    alert(`El mes ${mes} corresponde a la estación ${estacion}.`)
  console.log(`El mes ${mes} corresponde a la estación ${estacion}.`)
}
