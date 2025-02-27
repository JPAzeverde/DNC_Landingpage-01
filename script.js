var Bruna = window.document.getElementById("Bruna")
var Leo = window.document.getElementById("Leo")
var Samantha = window.document.getElementById("Samantha")
var SetaDir = window.document.getElementById("seta-direita")
var SetaEsq = window.document.getElementById("seta-esquerda")

function rolarDireita(){
    Bruna.style="display:none;"
    Samantha.style="display:flex;"
    SetaDir.style = "display:none;"
    SetaEsq.style = "display:flex;"

}

function rolarEsquerda(){
    Bruna.style="display:flex;"
    Samantha.style="display:none;"
    SetaDir.style = "display:flex;"
    SetaEsq.style = "display:none;"
}