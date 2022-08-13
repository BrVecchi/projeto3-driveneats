function marcarPrato(seletor) {
  const marcado = document.querySelector(".pratos .borda");
  if (marcado !== null) {
    marcado.classList.remove("borda");
    marcado.classList.add("esconder");
  }
  const seletor_borda = seletor + " #borda";
  const prato = document.querySelector(seletor_borda);
  prato.classList.add("borda");
  prato.classList.remove("esconder");

  const marcado_x = document.querySelector(".pratos .x");
  if (marcado_x !== null) {
    marcado_x.classList.remove("x");
  }
  const x = document.querySelector(seletor);
  x.classList.add("x");
}

function marcarBebida(seletor) {
  const marcado = document.querySelector(".bebidas .borda");
  if (marcado !== null) {
    marcado.classList.remove("borda");
    marcado.classList.add("esconder");
  }
  const seletor_borda = seletor + " #borda";
  const prato = document.querySelector(seletor_borda);
  prato.classList.add("borda");
  prato.classList.remove("esconder");

  const marcado_x = document.querySelector(".bebidas .x");
  if (marcado_x !== null) {
    marcado_x.classList.remove("x");
  }
  const x = document.querySelector(seletor);
  x.classList.add("x");
}

function marcarSobremesa(seletor) {
  const marcado = document.querySelector(".sobremesas .borda");
  if (marcado !== null) {
    marcado.classList.remove("borda");
    marcado.classList.add("esconder");
  }
  const seletor_borda = seletor + " #borda";
  const prato = document.querySelector(seletor_borda);
  prato.classList.add("borda");
  prato.classList.remove("esconder");

  const marcado_x = document.querySelector(".sobremesas .x");
  if (marcado_x !== null) {
    marcado_x.classList.remove("x");
  }

  const x = document.querySelector(seletor);
  x.classList.add("x");
}

function mudarBotao() {
  const prato_marcado = document.querySelector(".pratos .borda");
  const bebida_marcado = document.querySelector(".bebidas .borda");
  const sobremesa_marcado = document.querySelector(".sobremesas .borda");
  const botao = document.querySelector("#botao");
  const texto_botao = document.querySelector("#botao button");
  if (
    prato_marcado !== null &&
    bebida_marcado !== null &&
    sobremesa_marcado !== null
  ) {
    botao.classList.remove("indisponivel");
    botao.classList.add("disponivel");
    texto_botao.innerHTML = "Fechar pedido";
  }
}

let nome_prompt = null;
let end_prompt = null;
function pedirNovasInfo() {
  nome_prompt = prompt("Digite seu nome: ");
  end_prompt = prompt("Digite seu endereço: ");
}

function fazerPedido() {
  const prato = document.querySelector(".pratos .x .nome").innerHTML;
  const bebida = document.querySelector(".bebidas .x .nome").innerHTML;
  const sobremesa = document.querySelector(".sobremesas .x .nome").innerHTML;
  const preco_prato = Number(
    document.querySelector(".pratos .x .valor").innerHTML
  );
  const preco_bebida = Number(
    document.querySelector(".bebidas .x .valor").innerHTML
  );
  const preco_sobremesa = Number(
    document.querySelector(".sobremesas .x .valor").innerHTML
  );
  const preco = (preco_prato + preco_bebida + preco_sobremesa).toFixed(2);

  const mensagem = encodeURIComponent(
    `Olá, gostaria de fazer o pedido: \n- Prato: ${prato} \n- Bebida: ${bebida} \n- Sobremesa: ${sobremesa} \nTotal: R$ ${preco.replace(
      ".",
      ","
    )} \n \nNome: ${nome_prompt} \nEndereço: ${end_prompt}`
  );

  window.open(`https://wa.me/5541999188339?text=${mensagem}`);
}

function abrirModal() {
  const teste_botao = document.querySelector("#botao");
  const resultado = teste_botao.classList.contains("disponivel");
  const prato = document.querySelector(".pratos .x .nome").innerHTML;
  const bebida = document.querySelector(".bebidas .x .nome").innerHTML;
  const sobremesa = document.querySelector(".sobremesas .x .nome").innerHTML;
  const preco_prato = Number(
    document.querySelector(".pratos .x .valor").innerHTML
  );
  const preco_bebida = Number(
    document.querySelector(".bebidas .x .valor").innerHTML
  );
  const preco_sobremesa = Number(
    document.querySelector(".sobremesas .x .valor").innerHTML
  );
  const preco = (preco_prato + preco_bebida + preco_sobremesa).toFixed(2);
  if (resultado) {
    document.querySelector(".prato-nome").innerHTML = prato;
    document.querySelector(".prato-preco").innerHTML = preco_prato
      .toFixed(2)
      .toString()
      .replace(".", ",");
    document.querySelector(".bebida-nome").innerHTML = bebida;
    document.querySelector(".bebida-preco").innerHTML = preco_bebida
      .toFixed(2)
      .toString()
      .replace(".", ",");
    document.querySelector(".sobremesa-nome").innerHTML = sobremesa;
    document.querySelector(".sobremesa-preco").innerHTML = preco_sobremesa
      .toFixed(2)
      .toString()
      .replace(".", ",");
    document.querySelector(".total-preco").innerHTML = preco.replace(".", ",");
    document.querySelector(".corpo-modal").classList.remove("esconder");
  }
}

function fecharModal() {
  document.querySelector(".corpo-modal").classList.add("esconder");
}
