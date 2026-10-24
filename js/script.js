// Viva Moda — interações básicas em JavaScript
const botaoMenu = document.querySelector("#botao-menu");
const navegacao = document.querySelector("#navegacao");

botaoMenu.addEventListener("click", () => {
  const estaAberto = navegacao.classList.toggle("aberto");
  botaoMenu.setAttribute("aria-expanded", String(estaAberto));
  botaoMenu.setAttribute("aria-label", estaAberto ? "Fechar menu" : "Abrir menu");
});

navegacao.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navegacao.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir menu");
  });
});

// Cálculo demonstrativo de frete com if/else.
const formFrete = document.querySelector("#form-frete");
const valorCompra = document.querySelector("#valor-compra");
const resultadoFrete = document.querySelector("#resultado-frete");

formFrete.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const valor = Number(valorCompra.value);

  if (valor <= 0 || !Number.isFinite(valor)) {
    resultadoFrete.textContent = "Digite um valor de compra maior que zero.";
  } else if (valor >= 199) {
    resultadoFrete.textContent = "Boa notícia! Seu frete é grátis.";
  } else if (valor >= 100) {
    resultadoFrete.textContent = "Frete estimado: R$ 12,90.";
  } else {
    resultadoFrete.textContent = "Frete estimado: R$ 19,90.";
  }
});

// A validação nativa (required, type=email e minlength) é complementada pelo JS.
const formContato = document.querySelector("#form-contato");
const retornoFormulario = document.querySelector("#retorno-formulario");

formContato.addEventListener("submit", (evento) => {
  evento.preventDefault();

  if (!formContato.checkValidity()) {
    formContato.reportValidity();
    return;
  }

  retornoFormulario.textContent = "Obrigada pela mensagem! Este formulário é demonstrativo e não envia dados para um servidor.";
  formContato.reset();
});
