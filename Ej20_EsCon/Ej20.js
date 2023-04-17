const letra = prompt('Introduce una letra:')
const numero = parseInt(prompt('Introduce un número:'))

let resultado = ''

for (let i = 0; i < numero; i++) {
  resultado += letra
}

alert('El resultado es: ' + resultado)
