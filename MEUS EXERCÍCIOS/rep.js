function Calcular(){
    var inicio = document.getElementById("txt").value //captura o valor escrito no inicio
    var fim= document.getElementById('txt1').value//captura o valor escrito no fim
    var passo = document.getElementById('txt2').value// captura o valor escrito no passo 
    var res = document.getElementById('res') //cptura a resposta
   

    inicio = Number(inicio) // coversão de string para numero, por isso nao pode ter aspas dentro dos colchetes
    fim = Number (fim)
    passo = Number (passo)

    // Frase de acordo com os valores informados
    res.innerHTML = 'Contando: ';
// aqui é a parte de repetições , usando for como estruta de controle
    var i =''
    if(inicio < fim )
    for(var i= inicio; i<= fim; i += passo){ // o += adiciona o valor de passo , operadores servem para fazer a estrutura rodar corretamente
        res.innerText += `${i} 🫦`
    } else{
        for(var i= inicio; i >= fim; i -= passo){
         res.innerText += `${i}`
        }
    }
}