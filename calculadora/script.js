alert("Bienvenido para utilizar la calculadora debe de presionar el botón ON")

document.getElementById("other").style.color = "black"
document.addEventListener("DOMContentLoaded", function () {
    var btOn = document.getElementById("btOn")
    var btDel = document.getElementById("btDel")
    var btCl = document.getElementById("btCl")
    var bt1 = document.getElementById("bt1")
    var bt2 = document.getElementById("bt2")
    var bt3 = document.getElementById("bt3")
    var bt4 = document.getElementById("bt4")
    var bt5 = document.getElementById("bt5")
    var bt6 = document.getElementById("bt6")
    var bt7 = document.getElementById("bt7")
    var bt8 = document.getElementById("bt8")
    var bt9 = document.getElementById("bt9")
    var btS = document.getElementById("btS")
    var btR = document.getElementById("btR")
    var bt0 = document.getElementById("bt0")
    var btM = document.getElementById("btM")
    var btD = document.getElementById("btD")
    var btI = document.getElementById("btI")

    btOn.onclick = function (event) {
        document.getElementById("other").innerHTML = ""
        document.getElementById("other").style.color = "skyblue"
        if (btOn.classList.contains("botonRojo")) {
            btOn.classList.remove("botonRojo");
            btOn.classList.add("verde_button");
        } else if (btOn.classList.contains("verde_button")) {
            btOn.classList.remove("verde_button");
            btOn.classList.add("botonRojo");
            document.getElementById("other").style.color = "black"
            document.getElementById("other").innerHTML = ""
        }
    }
    btDel.onclick = function (event) { document.getElementById("other").innerHTML = "" }
    btCl.onclick = function (event) { document.getElementById("other").innerHTML = "" }

    bt1.onclick = function (event) {
        var t_1 = document.createTextNode("1");
        document.getElementById("other").appendChild(t_1)
    }
    bt2.onclick = function (event) {
        var t_1 = document.createTextNode("2");
        document.getElementById("other").appendChild(t_1)
    }
    bt3.onclick = function (event) {
        var t_1 = document.createTextNode("3");
        document.getElementById("other").appendChild(t_1)
    }
    bt4.onclick = function (event) {
        var t_1 = document.createTextNode("4");
        document.getElementById("other").appendChild(t_1)
    }
    bt5.onclick = function (event) {
        var t_1 = document.createTextNode("5");
        document.getElementById("other").appendChild(t_1)
    }
    bt6.onclick = function (event) {
        var t_1 = document.createTextNode("6");
        document.getElementById("other").appendChild(t_1)
    }
    bt7.onclick = function (event) {
        var t_1 = document.createTextNode("7");
        document.getElementById("other").appendChild(t_1)
    }
    bt8.onclick = function (event) {
        var t_1 = document.createTextNode("8");
        document.getElementById("other").appendChild(t_1)
    }
    bt9.onclick = function (event) {
        var t_1 = document.createTextNode("9");
        document.getElementById("other").appendChild(t_1)
    }

    btS.onclick = function (event) {
        var t_1 = document.createTextNode("+");
        document.getElementById("other").appendChild(t_1)
    }
    btR.onclick = function (event) {
        var t_1 = document.createTextNode("-");
        document.getElementById("other").appendChild(t_1)
    }
    bt0.onclick = function (event) {
        var t_1 = document.createTextNode("0");
        document.getElementById("other").appendChild(t_1)
    }
    btM.onclick = function (event) {
        var t_1 = document.createTextNode("*");
        document.getElementById("other").appendChild(t_1)
    }
    btD.onclick = function (event) {
        var t_1 = document.createTextNode("/");
        document.getElementById("other").appendChild(t_1)
    }
    btI.onclick = function (event) {
        const operacionTag = document.getElementById('other');
        const operacionTexto = operacionTag.textContent;
        let numero1 = '';
        let numero2 = '';
        let signo = '';
        for (let i = 0; i < operacionTexto.length; i++) {
            const caracter = operacionTexto.charAt(i);
            if (caracter === '+' || caracter === '-' || caracter === '*' || caracter === '/') {
                signo = caracter;
            } else if (caracter === ' ') {
            } else if (signo === '') {
                numero1 += caracter;
            } else {
                numero2 += caracter;
            }
        }
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);
        let resultado = 0;
        if (signo === '+') {
            resultado = numero1 + numero2;
        } else if (signo === '-') {
            resultado = numero1 - numero2;
        } else if (signo === '*') {
            resultado = numero1 * numero2;
        } else if (signo === '/') {
            resultado = numero1 / numero2;
        } else {
            console.error('Signo aritmético no reconocido');
        }
        operacionTag.textContent = `${numero1} ${signo} ${numero2} = ${resultado}`; // Actualizar el contenido de la etiqueta
    }
})