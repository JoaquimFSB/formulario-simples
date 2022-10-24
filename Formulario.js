function imprimir() {
    var Nome = document.getElementById("nome").value
    var DataNasc = document.getElementById("DataNasc").value
    document.getElementById("lista").innerHTML += ` ${Nome} <br> ${DataNasc}<br>`
}
