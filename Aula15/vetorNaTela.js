let val = [8,1,7,4,2,9]

/*val.sort() //Mostra valore em ordem crescente
for (let pos=0; pos < val.length; pos++){
    console.log(`Aposição ${pos} tem o valor ${val[pos]}`)    
}*/

for(let pos in val){
    console.log(`A posição ${pos} tem o valor ${val[pos]}`)
}
