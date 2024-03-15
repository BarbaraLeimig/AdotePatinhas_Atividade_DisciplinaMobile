addEventListener(
    "load",
    function () {
      // Chama a função hideURLbar assim que a página é carregada.
      setTimeout(hideURLbar, 0);
    },
    false
  );

  function hideURLbar() {
    // Move a janela de visualização para esconder a barra de URL do navegador.
    window.scrollTo(0, 1);
  }