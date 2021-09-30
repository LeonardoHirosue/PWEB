var totalResposta = 0
var respostas = []
let somaIdade = 0
let idadeMedia 
let maisVelha = 0
let maisNova 
let qtdePessimo = 0
let qtdeOtimoBom = 0
let porcentagemOtimoBom 
let qtdeMulheres = 0
let qtdeHomens = 0


function exibirEstatisticas(){
   calculaIdadeMedia()
   selecionaMaisNova()
   selecionaMaisVelha()
   contaPessimo()
   calculaPorcentagemOtimoBom()
   contaMulheresHomens()

   console.log(idadeMedia)
   console.log(maisNova)
   console.log(maisVelha)
   console.log(qtdePessimo)
   console.log(porcentagemOtimoBom)
   console.log(qtdeMulheres)
   console.log(qtdeHomens)

   
   var resultado = document.getElementById("resultado")
   resultado.innerHTML = ("<br>Estatísticas <br><br>Média de idade: " + idadeMedia + "<br>Pessoa mais nova: " + maisNova + "<br>Pessoa mais velha: " + maisVelha + "<br>Quantidade de Péssimos: " + qtdePessimo + "Porcentagem de Ótimo e Bom: " + porcentagemOtimoBom + "%" + "<br>Quantidade de Mulheres: " + qtdeMulheres + "<br>Quantidade de Homens: " + qtdeHomens)
}

function guardarResposta(){

    totalResposta++;
    
    var sexoSelecionado = document.getElementsByName("sexo")
    for (var i = 0; i < sexoSelecionado.length; i++) {
        if(sexoSelecionado[i].checked){
            break
        }        
    }

    var opiniaoSelecionada = document.getElementsByName("opiniao")
    for (var j = 0; j < opiniaoSelecionada.length; j++) {
        if(opiniaoSelecionada[j].checked){
            break
        }        
    }
    
    var resposta = {
        idade: parseInt(document.getElementById("idade").value),
        sexo: sexoSelecionado[i].value,
        opiniao: opiniaoSelecionada[j].value
    }

    respostas.push(resposta)
    console.log(respostas) 

    document.getElementById("idade").value = null
    document.getElementsByName("sexo")[i].checked = false
    document.getElementsByName("opiniao")[j].checked = false

    document.getElementById("divBtnEstatisticas").innerHTML = ("<button onClick='exibirEstatisticas()' id='btnEstatisticas'>Exibir Estatisticas</button>")
    
} 

function calculaIdadeMedia(){
    for (let i = 0; i < respostas.length; i++) {
        somaIdade += respostas[i].idade;        
    } 
    idadeMedia=somaIdade/respostas.length   
}

function selecionaMaisNova(){
    for (let i = 0; i < respostas.length; i++) {
        if( i == 0){
            maisNova = respostas[i].idade
        }else if(respostas[i].idade < respostas[i-1].idade){
            maisNova = respostas[i].idade
        }                
    }
}

function selecionaMaisVelha(){
    for (let i = 0; i < respostas.length; i++) {
        if(respostas[i].idade > maisVelha){
            maisVelha = respostas[i].idade
        }              
    }
}

function contaPessimo(){
    for (let i = 0; i < respostas.length; i++) {
        if(respostas[i].opiniao == "1"){
            qtdePessimo ++
        }
    }
}

function calculaPorcentagemOtimoBom(){
    for (let i = 0; i < respostas.length; i++) {
        if(respostas[i].opiniao == "3" || respostas[i].opiniao == "4"){
            qtdeOtimoBom++
        }
    }
    porcentagemOtimoBom = qtdeOtimoBom/respostas.length * 100
}

function contaMulheresHomens(){
    for (let i = 0; i < respostas.length; i++) {
        if(respostas[i].sexo == "feminino"){
            qtdeMulheres++
        }else{
            qtdeHomens++
        }
    }
}


