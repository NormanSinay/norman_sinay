function iniciarReloj() {
    var fecha = document.getElementById("fecha");
    var hora = document.getElementById("hora");

    function actualizar() {
        var ahora = new Date();
        var dia = ahora.getDate();
        var mes = ahora.getMonth() + 1;
        var año = ahora.getFullYear();
        var horas = ahora.getHours();
        var minutos = ahora.getMinutes();
        var segundos = ahora.getSeconds();
        var ampm = horas >= 12 ? "PM" : "AM";

        // Formatear fecha y hora
        fecha.textContent = dia + "/" + mes + "/" + año;
        hora.textContent = horas % 12 + ":" + (minutos < 10 ? "0" : "") + minutos + ":" + (segundos < 10 ? "0" : "") + segundos + " " + ampm;
    }

    // Actualizar la hora cada segundo
    setInterval(actualizar, 1000);

    // Mostrar la hora actual al inicio
    actualizar();
}
