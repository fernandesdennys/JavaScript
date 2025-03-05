function contar() {
  let inic = document.getElementById("txti");
  let fim = document.getElementById("txtf");
  let pass = document.getElementById("txtp");

  if (
    inic.value.length == 0 ||
    fim.value.length == 0 ||
    pass.value.length == 0) {
    res.innerHTML = 'Impossível contar!'    
    window.alert('[ERRO] Faltam dados"');
  } else {
    res.innerHTML = "Contando: <br>";
    let i = Number(inic.value);
    let f = Number(fim.value);
    let p = Number(pass.value);
    if (p <= 0 ) {
        window.alert('Passo inválido! Considerando PASSO 1')
    }
    if (i < f) {
        //Contagem Crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{27A1}`;
      }
    } else {
        //Contagem Regressiva
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `\u{1f3c1}`;
      }
    }
    res.innerHTML += `\u{1f3c1}`;
  }
}
