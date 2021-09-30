let numeros = []
let maiorNumero

function ordenar(){
    numeros[0] = parseInt(document.getElementById("number1").value)
    numeros[1] = parseInt(document.getElementById("number2").value)
    numeros[2] = parseInt(document.getElementById("number3").value)

    for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < numeros.length - i; j++) {
            if(numeros[j+1]<numeros[j]){
                var aux = numeros[j+1]
                numeros[j+1] = numeros[j]
                numeros[j] = aux
            }       
        }       
    }

    document.getElementById("number1").value = numeros[0]
    document.getElementById("number2").value = numeros[1]
    document.getElementById("number3").value = numeros[2]

}

function selecionaMaiorNumero(){
    for (let i = 0; i < numeros.length; i++) {
        if(i == 0){
            maiorNumero = numeros[i]
        }else if (numeros[i]>numeros[i-1]) {
            maiorNumero = numeros[i]
        }
    }

    document.getElementById("exibeMaiorNumero").innerHTML = maiorNumero
}