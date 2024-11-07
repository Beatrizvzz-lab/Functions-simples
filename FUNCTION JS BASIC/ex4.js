let contar = [5,5,6,7,8,9,10,5, 6]
function contagem(array, numero){
return array.filter(item => item === numero).length// filtra as infomaçoes 
}
console.log(contagem(contar, 5))

//exemplo de arrow function
const contagem1 = (param1, param2) => {
    if (param1 == 1){
        return false
    }

}
// exemplo de arrow function
const dobro = (numero) => {
    return numero * 2;
  };
  