function marcarPrato(seletor) {
    const marcado = document.querySelector(".pratos .borda");
    if (marcado !== null) {
      marcado.classList.remove("borda");
    }
    const seletor_borda = seletor + ' #borda';
    const prato = document.querySelector(seletor_borda);
    prato.classList.add("borda");
  }

  function marcarBebida(seletor) {
    const marcado = document.querySelector(".bebidas .borda");
    if (marcado !== null) {
      marcado.classList.remove("borda");
    }
    const seletor_borda = seletor + ' #borda';
    const prato = document.querySelector(seletor_borda);
    prato.classList.add("borda");
  }

  function marcarSobremesa(seletor) {
    const marcado = document.querySelector(".sobremesas .borda");
    if (marcado !== null) {
      marcado.classList.remove("borda");
    }
    const seletor_borda = seletor + ' #borda';
    const prato = document.querySelector(seletor_borda);
    prato.classList.add("borda");
  }

  function mudarBotao() {
  const prato_marcado = document.querySelector(".pratos .borda");
  const bebida_marcado = document.querySelector(".bebidas .borda");
  const sobremesa_marcado = document.querySelector(".sobremesas .borda");
  const botao = document.querySelector("#botao");
  const texto_botao = document.querySelector("#botao button")
  if (prato_marcado !== null && bebida_marcado !== null && sobremesa_marcado !== null) {
    botao.classList.remove("indisponivel");
    botao.classList.add("disponivel");
    texto_botao.innerHTML = "Fechar pedido";
  }
  }