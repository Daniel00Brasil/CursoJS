var idade = 16
console.log(`Sua idade é ${idade} anos`)
if (idade < 16) {
    console.log('NÃO VOTA')
} else if (idade < 18 || idade > 65) { 
    console.log('VOTO opcional')
} else {
    console.log('VOTO obrigatório')
}
    
