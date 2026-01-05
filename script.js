const titulo = document.querySelector(".cabecalho-sub-titulo");
const texto = "Desenvolvedor Front End";
let i = 0;

titulo.textContent = "";

function digitar() {
  if (i < texto.length) {
    titulo.textContent += texto[i];
    i++;
    setTimeout(digitar, 100);
  }
}

digitar();
