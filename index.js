// Array para armazenar os números inseridos
let numeros = [];

function Adicionar() {
    // Captura o valor do input e converte para número
    let numeroInput = document.getElementById('n2');
    let numero = Number(numeroInput.value);
    
    if (numero < 1 || numero > 100) {
        alert("Por favor, insira um número entre 1 e 100.");
    } else if (numeros.includes(numero)) {
        alert("Este número já foi adicionado.");
    } else {
        // Adiciona o número ao array e atualiza a lista
        numeros.push(numero);
        
        // Cria um novo elemento <option> para exibir o número na lista
        let numeroLista = document.getElementById('numero');
        let item = document.createElement("option");
        item.text = `Número ${numero}`;
        numeroLista.appendChild(item);//faz aparecer na lista 
        
       
    }
}
function Verificar() {
    if (numeros.length === 0) {//check se foi preenchido
        alert("Adicione números antes de verificar");
        return;
    }
    
    let quantidade = numeros.length;//calcula a quantidade de numeros usando length
    let soma = numeros.reduce((total, num) => total + num, 0);//soma todos os numeros usando o reduce 
    let maior = Math.max(...numeros);
    let menor = Math.min(...numeros);
    let media = soma / quantidade;

    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p>Quantidade de números adicionados: ${quantidade}</p>
        <p>Soma dos números: ${soma}</p>
        <p>Maior número adicionado: ${maior}</p>
        <p>Menor número acionado : ${menor}</p>
        <p>Média dos valores: ${media.toFixed(2)}</p>
    `;
}
