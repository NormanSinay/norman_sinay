function numeroMayor() {
    var num1 = parseInt(prompt("Ingresa el primer número: "));
    var num2 = parseInt(prompt("Ingresa el segundo número: "));
    var num3 = parseInt(prompt("Ingresa el tercer número: "));
  
    if (num1 == num2 && num1 == num3) {
      alert("Los tres números son iguales.");
    } else if (num1 > num2 && num1 > num3) {
      alert("El número mayor es " + num1);
    } else if (num2 > num1 && num2 > num3) {
      alert("El número mayor es " + num2);
    } else {
      alert("El número mayor es " + num3);
    }
  }
  
  