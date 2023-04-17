function convertirUnidad(valor, unidadInicial, unidadFinal) {
    let resultado;
    switch (unidadInicial) {
      case "mm":
        if (unidadFinal === "m") {
          resultado = valor / 1000;
        } else if (unidadFinal === "cm") {
          resultado = valor / 10;
        } else {
          resultado = valor;
        }
        break;
      case "cm":
        if (unidadFinal === "m") {
          resultado = valor / 100;
        } else if (unidadFinal === "mm") {
          resultado = valor * 10;
        } else {
          resultado = valor;
        }
        break;
      case "m":
        if (unidadFinal === "cm") {
          resultado = valor * 100;
        } else if (unidadFinal === "mm") {
          resultado = valor * 1000;
        } else {
          resultado = valor;
        }
        break;
      default:
        alert("Unidad no reconocida");
    }
    alert(`${valor} ${unidadInicial} equivalen a ${resultado} ${unidadFinal}`);
  }
  
  let unidadInicial = prompt("Ingrese la unidad inicial (mm, cm o m): ");
  let valor = prompt("Ingrese el valor a convertir: ");
  let unidadFinal = prompt("Ingrese la unidad final (mm, cm o m): ");
  
  convertirUnidad(valor, unidadInicial, unidadFinal);
  