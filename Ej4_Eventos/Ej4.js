const miImagen = document.getElementById('imagen');

miImagen.addEventListener('mousedown', (event) => {
  console.log('El botón del ratón se presionó sobre la imagen.');
});

miImagen.addEventListener('mouseup', (event) => {
  console.log('El botón del ratón se soltó sobre la imagen.');
});
