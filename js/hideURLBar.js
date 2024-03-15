document.addEventListener("DOMContentLoaded", function init() {
  // Oculta a barra de URL do navegador assim que a página é carregada.
  setTimeout(hideURLbar, 0);
});

function hideURLbar() {
  // Move a janela de visualização para esconder a barra de URL do navegador.
  window.scrollTo(0, 1);
}