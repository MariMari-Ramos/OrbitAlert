// Validação do formulário de contato.
export function initContato() {
  const form = document.getElementById("contatoForm");
  if (!form) {
    return;
  }

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");
  const erroNome = document.getElementById("erroNome");
  const erroEmail = document.getElementById("erroEmail");
  const erroMensagem = document.getElementById("erroMensagem");
  const sucesso = document.getElementById("formSucesso");

  function emailValido(valor) {
    const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return padrao.test(valor);
  }

  function limparErro(campo, elementoErro) {
    elementoErro.textContent = "";
    campo.classList.remove("campo-invalido");
  }

  function mostrarErro(campo, elementoErro, texto) {
    elementoErro.textContent = texto;
    campo.classList.add("campo-invalido");
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valido = true;
    sucesso.classList.remove("ativo");

    if (nome.value.trim() === "") {
      mostrarErro(nome, erroNome, "Por favor, digite seu nome.");
      valido = false;
    } else {
      limparErro(nome, erroNome);
    }

    if (email.value.trim() === "") {
      mostrarErro(email, erroEmail, "Por favor, digite seu e-mail.");
      valido = false;
    } else if (!emailValido(email.value.trim())) {
      mostrarErro(email, erroEmail, "Digite um e-mail válido.");
      valido = false;
    } else {
      limparErro(email, erroEmail);
    }

    if (mensagem.value.trim().length < 10) {
      mostrarErro(mensagem, erroMensagem, "A mensagem deve ter pelo menos 10 caracteres.");
      valido = false;
    } else {
      limparErro(mensagem, erroMensagem);
    }

    if (valido) {
      sucesso.classList.add("ativo");
      form.reset();
    }
  });
}