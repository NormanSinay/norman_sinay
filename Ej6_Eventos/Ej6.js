const inputTexto = document.getElementById('texto');

inputTexto.addEventListener('select', (event) => {
  const textoSeleccionado = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);

  alert(`Has seleccionado: ${textoSeleccionado}`);
});
