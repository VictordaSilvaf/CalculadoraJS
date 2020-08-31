var total = null
var valorSecundario = null
var operador = null
var valorInicial = null

function clicar(id) {
    if (valorSecundario == null && id == "-") {
        valorSecundario = id

    } else if (id == "0" || id == "1" || id == "2" || id == "3" || id == "4" || id == "5" || id == "6" || id == "7" || id == "8" || id == "9" || id == ".") {
        if (valorSecundario == null) {
            valorSecundario = id
        } else {
            valorSecundario += id
        }

    } else if (valorSecundario != null && (id == "+" || id == "-" || id == "*" || id == "/")) {
        valorInicial = valorSecundario
        operador = id
        valorSecundario = null
    }

    display()

}

function c() {
    valorInicial = null
    valorSecundario = null
    operador = null
    display()

}

function ce() {

    if (valorSecundario != null && operador == null) {
        valorSecundario = null
    } else if (valorSecundario == null && operador != null) {
        operador = null
        valorSecundario = valorInicial
        valorInicial = null


    } else if (valorSecundario != null && valorInicial != null) {
        valorSecundario = null

    }


    display()
}

function porcentagem() {
    if (valorSecundario != null && valorInicial != null) {
        valorSecundario = valorSecundario * (valorInicial / 100)
        display()
    }

}

function igual() {
    valorSecundario = parseFloat(valorSecundario)
    valorInicial = parseFloat(valorInicial)

    switch (operador) {
        case "+":
            total = valorInicial + valorSecundario
            break;
        case "-":
            total = valorInicial - valorSecundario
            break;
        case "/":
            total = valorInicial / valorSecundario
            break;
        case "*":
            total = valorInicial * valorSecundario
            break;
    }
    if (total != null && valorSecundario != null && valorInicial != null) {
        valorSecundario = total
        valorInicial = null
        document.getElementById("text").innerHTML = total
        operador = null
    }
}

function apagar() {


    if (valorSecundario != null && operador == null) {

        valorSecundario = apagarString(valorSecundario)

    } else if (operador != null && valorSecundario == null) {
        operador = null
        valorSecundario = valorInicial
        valorInicial = null
    } else if (valorInicial != null && valorSecundario != null) {
        valorSecundario = apagarString(valorSecundario)
    }
    display()
}

function apagarString(num) {
    console.log(num)
    let vetorStrings = null
    let tamanho

    vetorStrings = num.split("")
    tamanho = vetorStrings.length - 1

    let item = null
    num = null

    for (var x = 0; x < tamanho; x++) {

        if (num == null) {
            item = vetorStrings[x]
            num = item
        } else if (num != null) {
            item = vetorStrings[x]
            num += item
        }

    }

    return num
}

function display() {
    if (valorSecundario != null && operador == null) {
        document.getElementById("text").innerHTML = valorSecundario

    } else if (operador != null && valorSecundario == null) {
        document.getElementById("text").innerHTML = valorInicial + " " + operador

    } else if (valorInicial != null && valorSecundario != null) {
        document.getElementById("text").innerHTML = valorInicial + " " + operador + " " + valorSecundario

    } else if (valorInicial == null && valorSecundario == null && operador == null) {
        document.getElementById("text").innerHTML = 0

    }

}