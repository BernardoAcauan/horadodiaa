function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        // BOM DIA!
        msg.innerHTML = `bom dia <strong>GIO GIO</strong> agora são exatamente ${hora} horas`
        img.src = 'manhã.png.jpg'
    } else if(hora >= 12 && hora <= 18){
        // BOA TARDE!
        img.src = 'tarde.png.jpg'
        msg.innerHTML = `boa tarde <strong>GIO GIO</strong> agora são exatamente ${hora} horas`
    } else{
        img.src = 'noite.png.jpg'
        msg.innerHTML = `boa noite <strong>GIO GIO</strong> agora são exatamente ${hora} horas`
        // BOA NOITE!
    }
}