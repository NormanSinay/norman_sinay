const inputText = document.getElementById('input-text');

inputText.addEventListener('keydown', (event) => {
  alert(`La tecla presionada fue: ${event.key}`);
});
