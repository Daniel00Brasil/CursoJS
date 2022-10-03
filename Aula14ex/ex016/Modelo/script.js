function contar() {
    let ini = document.getElementById('txtInicio') //PEGA O VALOR DIGITADO
    let fim = document.getElementById('txtFim')
    let passo = document.getElementById('txtPasso')
    let res = document.getElementById('result') 
 
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //SE NÃO FOR DIGITADO NENHUM VALOR A MENSAGEM DE ERRO SERÁ MOSTRADA
        window.alert('[ERRO] Faltam Dados.')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            //SE CASO O USUÁRIO DIGITAR 0 PARA PASSSO.
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //FAZ A CONTAGEM CRESCENTE
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`        
            }
            res.innerHTML += `\u{1F3C1}` 
        } else {
            //FAZ A CONTAGEM DECRESCENTE
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}` //MOSTRA UM EMOJI NO FINAL DE CADA NUMERO
            }
        }    
        res.innerHTML += `\u{1F3C1}` // MOSTRA OUTRO EMOJI NO FINAL DA CONTAGEM          
    }
}

   