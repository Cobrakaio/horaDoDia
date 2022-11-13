function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    hora = 13

    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //Bom dia!
        img.src = 'fotoManha.png'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 18 ){
        //BOA TARDE!
        img.src = 'fotoTarde.png'
        document.body.style.background = '#b9846f'
    } else{
        //BOA NOITE!
        img.src = 'fotoNoite.png'
        document.body.style.background = '#515154'
    }
}

