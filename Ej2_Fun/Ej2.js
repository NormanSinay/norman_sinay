function genCaracteres(n, caracter) {
    let resultado = "";
    for (let i = 0; i < n; i++) {
      resultado += caracter;
    }
    return resultado;
  }
  
  const n = parseInt(prompt("Introduzca un número entero:"));
  const caracter = prompt("Introduzca un caracter:");
  
  const resultado = genCaracteres(n, caracter);
  alert(resultado);
  