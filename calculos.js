function funcionPrimaria(id) {
    document.calculo.resultado.value += id;
}

function limpiarPantalla() {
    document.calculo.resultado.value = "";
}

function calcular() {
        var input = eval(document.calculo.resultado.value);
        document.calculo.resultado.value = input;
}

