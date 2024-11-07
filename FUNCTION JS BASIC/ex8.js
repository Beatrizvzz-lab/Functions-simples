//let = [5, 10, 20, 30]
function maiornumero(numeros){// parametro/array
    return Math.max (...numeros)// spread ..., facila no momento em que o math.min ou max faz a verificao  do numero maior ou menor , pois `e como se ele separasse cada elemento 

}
console.log(maiornumero([5, 10, 20, 30]))// array dentro dos colchetes

// usando arrow functions
let numeros = (maiornumero) =>{
    return Math.max (...numeros)
}
console.log(maiornumero([30,2,55,100]))

//usando loop
function maiornumero(numeros){
    let maior = [0]// ponto de partida , 0 e o maior numero que foi encontrado ate o momento // variavel com uma array 
    for (let i =  1 ;i < numeros.length; i++)// loop que inicia-se com i = 1 que percorre do 1 ate o ultimo numero da array, nao precisa iniciar com 0 pq nos ja definimos ele como maior numero ate o momento entao nao precisa comparar ele com ele mesmo // ++ é incremento so pra lembrar //Para i começando em 1, enquanto i for menor que o tamanho do array numeros, incremente i em 1 a cada iteração.//percorre todos os elementos de numeros, a partir do segundo elemento até o último, permitindo que você compare cada elemento com o maior valor encontrado até o momento.
        if(numeros[i] > maior){// condiçao que verifica se o elemento dentro de numeros [i] é maior que o que esta dentro de maior 
            maior= numeros [i]// se for verdade a condiçao o atualizamos o valor de maior para numeros [i]

        }
        return maior
}
console.log(maiornumero([5, 10]))//chama a funçao e adiciona a array com os numeros comparando