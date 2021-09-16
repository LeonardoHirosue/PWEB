function Pedra(){
    var escolhaComputador = Math.random();
    console.log(escolhaComputador)
    var resultado = document.getElementById("resultado")
    if(escolhaComputador < 0.33){
        resultado.innerHTML = "✊Você empatou, jogue novamente!"
    }else if(escolhaComputador < 0.66){
        resultado.innerHTML = "✋Você Perdeu!!!"
    }else{
        resultado.innerHTML = "✌️ Você Ganhou, Parabéns!!!"
    }
}

function Papel(){
    var escolhaComputador = Math.random();
    console.log(escolhaComputador)
    var resultado = document.getElementById("resultado")
    if(escolhaComputador < 0.33){
        resultado.innerHTML = "✊ Você Ganhou, Parabéns!!!"
    }else if(escolhaComputador < 0.66){
        resultado.innerHTML = "✋Você empatou, jogue novamente!"
    }else{
        resultado.innerHTML = "✌️ Você perdeu!!!"
    }
}

function Tesoura(){
    var escolhaComputador = Math.random();
    console.log(escolhaComputador)
    var resultado = document.getElementById("resultado")
    if(escolhaComputador < 0.33){
        resultado.innerHTML = "✊ Você Perdeu!!!"
    }else if(escolhaComputador < 0.66){
        resultado.innerHTML = "✋Você Ganhou, Parabéns!!!"
    }else{
        resultado.innerHTML = "✌️ Você empatou, jogue novamente!"
    }
}