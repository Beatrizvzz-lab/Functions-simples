//jeito que eu fiz
function multiplicador(number){
    let a = 10
    return a * number
}
console.log(multiplicador(6))


//jeito que o chat fez 

function multiplicador(num){
    return function (outroNum){
        return num*outroNum 
    }
}
const multi = multiplicador(2)
console.log(multi(5))