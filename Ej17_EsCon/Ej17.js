let password1 = 'asd';
let password2 = '';

while (password1 !== password2) {
  password1 = prompt('Introduce una contraseña:');
  password2 = prompt('Vuelve a introducir la contraseña:');
  
  if (password1 !== password2) {
    alert('Las contraseñas no coinciden. Inténtalo de nuevo.');
  }
}

alert('Contraseña correcta!');
