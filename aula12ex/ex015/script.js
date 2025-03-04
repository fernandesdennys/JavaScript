function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");

  if (
    fano.value.length == 0 ||
    Number(fano.value) > ano ||
    Number(fano.value) < 1900
  ) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
    return; // Para a execução caso tenha erro
  }
  var fsex = document.getElementsByName("radsex");
  var idade = ano - Number(fano.value);
  var genero = "";
  var img = document.createElement("img");
  img.setAttribute("id", "foto");
  if (fsex[0].checked) {
    genero = "Homem";
    if (idade >= 0 && idade < 10) {
      //Criança
      img.setAttribute("src", "imagens/bebeH.png");
    } else if (idade < 21) {
      //Jovem
      img.setAttribute("src", "imagens/jovemH.png");
    } else if (idade < 50) {
      //Adulto
      img.setAttribute("src", "imagens/adultoH.png");
    } else {
      //Idoso
      img.setAttribute("src", "imagens/idosoH.png");
    }
  } else if (fsex[1].checked) {
    genero = "Mulher";
    if (idade >= 0 && idade < 10) {
      //Criança
      img.setAttribute("src", "imagens/bebeM.png");
    } else if (idade < 21) {
      //Jovem
      img.setAttribute("src", "imagens/jovemM.png");
    } else if (idade < 50) {
      //Adulto
      img.setAttribute("src", "imagens/adultoM.png");
    } else {
      //Idoso
      img.setAttribute("src", "imagens/idosoM.png");
    }
  }
  res.style.fontWeight = "bold"
  res.style.textAlign = "center";
  res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br><br>`;
  res.appendChild(img);
}
