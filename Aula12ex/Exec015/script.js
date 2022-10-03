function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtAno')
   var res = document.querySelector('div#res')
   
   if (fano.value.length == 0 || fano.value > ano) {
      window.alert('[ERRO] Verifique os dados e tente novamente')             
   } else {
      var fsex = document.getElementsByName('radSex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement('img') //Cria um elemento imagem(img)
      img.setAttribute('id','foto') //linka os atributos 
      
      if (fsex[0].checked) { 
        gereno = 'Homem'
        if (idade >= 0 && idade < 10) { //verifica a idade
            //imagem crinaça
            img.setAttribute('src', '_imagens/bebe-menino.png') //carrega a imagem
        }else if (idade < 21) {
            // imagem jovem
            img.setAttribute('src', '_imagens/homen-jovem.png')
        } else if (idade < 50) {
           // imagem homem
           img.setAttribute('src', '_imagens/homen.png')
        } else {
            //imagem idoso
            img.setAttribute('src', '_imagens/idoso.png')
        }   
      } else if (fsex[1].checked) {
        gereno = 'Mulher' 
        if (idade >= 0 && idade < 10) {
            //imagem crinaça
            img.setAttribute('src', '_imagens/bebe-menina.png')
        }else if (idade < 21) {
            //imagem jovem
            img.setAttribute('src', '_imagens/jovem-mulher.png')
        } else if (idade < 50) {
            //imagem Mulher
            img.setAttribute('src', '_imagens/mulher.png')
        } else {
            //imagem idosa
            img.setAttribute('src', '_imagens/idosa.png')
        }   
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${gereno} com ${idade} anos.` 
      res.append(img)        
   }
    
}