var numero = parseInt(prompt('Introduce un número entero:'))

if (isNaN(numero)) {
  alert('Debes introducir un número entero.')
} else {
  let cuentaAtras = ''

  for (let i = numero; i >= 0; i--) {
    cuentaAtras += i + ', '
  }

  alert('La Cuenta atrás es: ' + cuentaAtras.slice(0, -2))
}
