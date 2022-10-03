function tabuada() {
    let num = document.getElementById('txtNum')
    let tab = document.getElementById('selTab')
    if (num.value.length == 0) { 
        window.alert("Por Favor, digite um número")
    } else {
        let n = Number(num.value) //CONVERTE O NUMERO DIGITADO
        let c = 1
        tab.innerHTML = "" //LIMPA OS CAMPOS DO ELEMENTO (SELECT)
        while (c < 10) {
            let item = document.createElement('option') //Cria um elemento option de forma dinâmica
            item.text = `${n} x ${c} = ${n*c}` //faz a multiplicação da variavel (num) e (c)
            item.value = `tab${c}`
            tab.appendChild(item) //Cria um alemento filho
            c++
        }
    }


}