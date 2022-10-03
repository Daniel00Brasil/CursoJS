let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    //Só aceita número entre 1 a 100
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    //Verifica se o número já está na lista
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
       valores.push(Number(num.value)) //adiciona o valor digitado na Lista
       let item = document.createElement('option') //Criando o elemento option
       item.text = `Valor ${num.value} adicionado` //Mostra o Valor adicionado a lista
       lista.appendChild(item) //elemento filho
       res.innerHTML ='' //Limpa a mensagem (Total Cadastrados)
    } else {
        window.alert('Valor inválido ou já está na lista')
    }
    num.value = '' //Apaga o Valor digitado após o valor ser adicionado a lista
    num.focus()    // Mantem o curso no campo Número
}

function finalizar() {
    if (valores.length == 0) { //Alerta caso o botao finalizar seja precionado sem valor digitado
        window.alert('Adicione valores antes de finalizar')
    } else {
        
        let tot = valores.length //Informar quantos elementos o vetor tem
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        for (let pos in valores) {
            // Faz a soma dos valores da lista
            soma += valores[pos] 
            //  faz a verificação do número MAIOR e MENOR
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos] 
        }
        media = soma / tot //Calculando a média dos números. 
        res.innerHTML = ''      //Limpa o resultado
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>` //Mostra uma mensegem com o Total de número cadastrados
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`      //Mostra o Maior numero da lista
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`      //Mostra o menor número da lista 
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`    //Mostra a soma de todos os número da lista 
        res.innerHTML += `<p>A média dos números e ${media}</p>`
    }
}