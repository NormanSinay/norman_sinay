var lugar = prompt("Las opciones de bebidas son: Vino, Cerveza, Refresco y Agua\n¿Que desea ordenar?: ")

lugar_dato = lugar.toUpperCase();

if (lugar_dato == "CERVEZA" || lugar_dato == "VINO") {
    alert("Favor dirigirse a la barra.");
} else if (lugar_dato == "REFRESCO" || lugar_dato == "AGUA") {
    alert("Favor dirigirse a la tienda.")
}