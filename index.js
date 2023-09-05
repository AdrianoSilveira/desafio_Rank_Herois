const entradaDados = require('prompt-sync')({sigint: true}) /* pacote para solicitar a entrada do usuário em um programa JavaScript. 
O prompt-sync é um módulo que permite ler a entrada do teclado de forma síncrona. Para usá-lo, você precisa instalá-lo com o 
comando "npm install prompt-sync" no console e depois importá-lo no seu código com o comando "const prompt = require('prompt-sync')()".*/


let vitorias = 0
let derrotas = 0
let saldoVitorias = 0
let nivel = ""
let continuar = "S"



while (continuar.toUpperCase() == "S") {
    let caracter = true
    while (caracter == true){
        vitorias = entradaDados ("Digite sua quantidades de vitórias: ")
        derrotas = entradaDados ("Digite sua quantidades de derrotas: ")
        if(vitorias >= 0 && derrotas >= 0){
            caracter = false
        } else {
            console.log("Numero invalido, Digite novamento: ")
        }
    }
separador()
exibirRankeHeroi()
separador()
continuar = entradaDados ("              Deseja continuar? S/N ")
}



// função de calcula o nivel
function calculaSaldoVitorias (vitorias, derrotas){
    saldoVitorias = vitorias - derrotas
    return saldoVitorias
}

function VerificaNivelHerio (saldoVitorias){
    if(saldoVitorias <= 10){
        nivel = "Ferro"
    } else if( saldoVitorias <= 20){
        nivel = "Bronze"
    } else if(saldoVitorias <= 50){
        nivel = "Prata"
    } else if(saldoVitorias<= 80){
        nivel = "Ouro"
    } else if(saldoVitorias<= 90){
        nivel = "Diamante"
    } else if(saldoVitorias<= 100){
        nivel = "Lendário"
    } else if(saldoVitorias > 100){
        nivel = "Imortal"
} 
return nivel
}

function exibirRankeHeroi () {
calculaSaldoVitorias(vitorias, derrotas)
VerificaNivelHerio(saldoVitorias)

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)
}

function separador () {
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
}