//FAQ: abre/fecha a resposta ao clicar na pergunta.
export function initFaq() {
  const perguntas = document.querySelectorAll(".faq-pergunta");
  if (perguntas.length === 0) {
    return;
  }
  perguntas.forEach((pergunta) => {
    pergunta.addEventListener("click", () => {
      const item = pergunta.parentElement;
      item.classList.toggle("ativo");
    });
  });
}