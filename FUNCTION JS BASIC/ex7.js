
function media(numeros){
    const soma = numeros.reduce((acc, numeros) => acc + numeros,0)// acc - acumulador da função reduce, faz como se fosse uma soma por isso numros.reduce, a função reduce percorre todos os elementos do array e aplica uma função de acumulaçao a cada elemento. ela recebe 2 parametros acc e o elemento atual que nesse caso é numeros, 0 é o valor inicial de acc entao o acumulador começa como 0 e vai somando cada elemento do array á medida que percorre o array . acc + numero diz a funçaõ reduce somar o acumulador acc com o numero atual (numero). exemplo inicia acc 0 , que soma com 5 que o primeiro numero do array, agr o acc é 5 que soma com 2 o segundo numero da array que resulta em 7 entao agr o acc é 7 e assim por diante.
    return soma /numeros.length
}
console.log(media([5,2,8,9,3,6]))

//ou

let numeros = [5,2,8,9,3,6]
function media(array){
    let soma = 0
    for (let i = 0 ; i < array.length; i++){
        soma += array [i]
        return soma/ array.length
    }
}
console.log(media(numeros))