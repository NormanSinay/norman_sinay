var num = prompt("Introduce un número para mostrar su tabla de multiplicar:")

for (let i = 1; i <= 10; i++) {
  let result = num * i
  alert(num + " x " + i + " = " + result)
  console.log(num + " x " + i + " = " + result)
}
