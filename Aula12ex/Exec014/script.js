function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours() //Pega hora do sistema.
    var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = '_imagens/manha.png'
        document.body.style.background = '#e0be91'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = '_imagens/tarde.png'
        document.body.style.background = '#e3937a'
    } else {
        //BOA NOITE
        img.src = '_imagens/noite.png'
        document.body.style.background = '#354954'
    }
}
