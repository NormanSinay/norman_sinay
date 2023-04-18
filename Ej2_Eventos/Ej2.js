alert("Validar en Consola el foco de cada entrada de texto")
const form = document.querySelector('form')
const inputNombre = document.getElementById('nombre')
const inputApellido = document.getElementById('apellido')
const inputCorreo = document.getElementById('correo')

inputNombre.addEventListener('focus', () => {
    console.log('El campo de entrada "nombre" ha recibido el foco')
    inputNombre.style.backgroundColor = '#f1f1f1'
});

inputNombre.addEventListener('blur', () => {
    console.log('El campo de entrada "nombre" ha perdido el foco')
    inputNombre.style.backgroundColor = '#fff'
});

inputApellido.addEventListener('focus', () => {
    console.log('El campo de entrada "apellido" ha recibido el foco')
    inputApellido.style.backgroundColor = '#f1f1f1'
});

inputApellido.addEventListener('blur', () => {
    console.log('El campo de entrada "apellido" ha perdido el foco')
    inputApellido.style.backgroundColor = '#fff'
});

inputCorreo.addEventListener('focus', () => {
    console.log('El campo de entrada "correo" ha recibido el foco')
    inputCorreo.style.backgroundColor = '#f1f1f1'
});

inputCorreo.addEventListener('blur', () => {
    console.log('El campo de entrada "correo" ha perdido el foco')
    inputCorreo.style.backgroundColor = '#fff'
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Se ha enviado el formulario')
});
