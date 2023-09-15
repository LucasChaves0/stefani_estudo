function carregar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("imagem");
  let data = new Date();
  let hora = data.getHours();

  msg.innerHTML = `Agora são ${hora} horas`;

  if (hora >= 0 && hora < 12) {
    img.src = "fotomanha.jpg";
    document.body.style.background = "#a04f00";
  } else if (hora >= 12 && hora < 18) {
    img.src = "fototarde.jpg";
    document.body.style.background = "#956a71";
  } else {
    img.src = "fotonoite.jpg";
    document.body.style.background = "#0c1719";
  }
}
