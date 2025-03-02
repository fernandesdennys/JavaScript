function suanacionalidade() {    
    var input = window.document.querySelector("input#seupaís");
    var res = window.document.querySelector("div#res");
    var pais = input.value.trim().toLowerCase(); //  Obtém o valor digitado no input.
    var nacionalidades = {
      brasil: "Brasileiro(a)",
      portugal: "Português(a)",
      eua: "Americano(a)",
      frança: "Francês(a)",
      espanha: "Espanhol(a)",
      alemanha: "Alemão(ã)",
      japão: "Japonês(a)",
      china: "Chinês(a)",
      argentina: "Argentino(a)",
    };
    if (nacionalidades[pais]) {
      //Verifica se pais existe no objeto nacionalidades.
      res.innerHTML = `<p>sua nacionalidade é <strong>${nacionalidades[pais]}</strong></p>`;
    } // Se pais não estiver no objeto nacionalidades, executa este bloco. "res.innerHTML = `País não encontrado. Tente novamente.`"
    else {
      res.innerHTML = `<p>País não encontrado. Tente novamente.</p>`;
    }
  }