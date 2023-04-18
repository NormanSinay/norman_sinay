const button = document.getElementById('Button');
const div = document.getElementById('divP');
function handleClick() {
  const newParagraph = document.createElement('p');
  newParagraph.innerText = 'Párrafo agregado atravez de onclick().';
  div.appendChild(newParagraph);
}
button.onclick = handleClick;
button.addEventListener('click', function() {
  button.style.backgroundColor = 'green';
});
