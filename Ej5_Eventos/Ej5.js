const miFormulario = document.getElementById('formulario');

miFormulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    if (nombre === '' || email === '') {
        alert('Por favor, ingrese su nombre y correo electrónico.');
    } else {
        alert(`¡Gracias por enviar el formulario, ${nombre}!`);
        miFormulario.reset();
    }
});
