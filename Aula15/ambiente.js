let num = [5,2,8,9,3]
num[3] = 6  //adiciona o valor 6 na 3 posição
num.push(7) //colocar o valor 7 na ultima posição
num.length  //Comprimento do vetor
let pos = num.indexOf(8) //Pesquisa o valor na posição do vetor
//num.sort()  //Colocar todos os valores em ordem crescente

console.log (`O Vetor 8 está na posição ${pos}`)
console.log(num) //Mostra os Valores do Vetor
console.log(`O Vetor tem ${num.length} posições`) 
console.log(`O Valores do Vetor é : ${num}`)
console.log(`O Valor da posição 3 é ${num[3] }`)