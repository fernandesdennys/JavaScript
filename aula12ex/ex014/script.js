function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} Horas.`;
  if (hora >= 0 && hora <= 5) {
    img.src = "madrugada250px.png";
    document.body.style.background = "#2C3E50";
    msg.innerHTML = "Boa Madrugada!";
    img.style.boxShadow =
      "0px 0px 10px #2C3E50, 0px 0px 10px #2C3E50, 0px 0px 10px #2C3E50";
  } else if (hora >= 6 && hora < 12) {
    msg.innerHTML = `Bom dia!`;
    img.src = "manha250px.png";
    document.body.style.background = "#d3af8e";
    img.style.boxShadow =
      "0px 0px 10px #d3af8e, 0px 0px 10px #d3af8e, 0px 0px 10px #d3af8e";
  } else if (hora >= 12 && hora < 18) {
    msg.innerHTML = `Boa Tarde!`;
    img.src = "tarde250px.png";
    document.body.style.background = "#5e7f92";
    img.style.boxShadow =
      "0px 0px 10px #5e7f92, 0px 0px 10px #5e7f92, 0px 0px 10px #5e7f92";
  } else {
    msg.innerHTML += ` Boa noite!`;
    img.src = "noite250px.png";
    document.body.style.background = "#1b2b26";
    document.getElementById("titulo").style.color = "white";
    img.style.boxShadow =
      "0px 0px 10px #1b2b26, 0px 0px 10px #1b2b26, 0px 0px 10px #1b2b26";
  }
}
