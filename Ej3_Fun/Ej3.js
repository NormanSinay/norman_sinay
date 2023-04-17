function calcularTension() {
    var I = parseInt(prompt("Introduce el valor de la corriente eléctrica en Amperios (A): "))
    var R = parseInt(prompt("Introduce el valor de la resistencia eléctrica en Ohmios (Ohm): "))
    var V = I * R
    alert("La tensión eléctrica es " + V + " voltios (V).")
  }
  
  function calcularIntensidad() {
    var V = parseInt(prompt("Introduce el valor de la tensión eléctrica en voltios (V): "))
    var R = parseInt(prompt("Introduce el valor de la resistencia eléctrica en Ohmios (Ohm): "))
    var I = V / R
    alert("La intensidad de la corriente eléctrica es " + I + " Amperios (A).")
  }
  
  function calcularResistencia() {
    var V = parseInt(prompt("Introduce el valor de la tensión eléctrica en voltios (V): "))
    var I = parseInt(prompt("Introduce el valor de la corriente eléctrica en Amperios (A): "))
    var R = V / I
    alert("La resistencia eléctrica es " + R + " Ohmios (Ohm).")
  }
  
  var opcion
  
  do {
    opcion = prompt("Seleccione una opción: \n A. Calcular Tensión eléctrica \n B. Calcular Intensidad de la corriente eléctrica \n C. Calcular Resistencia eléctrica")
    if (opcion == "A") {
      calcularTension()
    } else if (opcion == "B") {
      calcularIntensidad()
    } else if (opcion == "C") {
      calcularResistencia()
    } else {
      alert("Opción inválida. Por favor, seleccione una opción válida.")
    }
  } while (opcion != "a" && opcion != "b" && opcion != "c")
  