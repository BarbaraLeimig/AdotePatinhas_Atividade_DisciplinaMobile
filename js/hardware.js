// Recurso de hardware para o telefone vibra ao toque de itens na tela, como itens do menu

function vibrateSimple() {
  navigator.vibrate(200);
}

function vibratePattern() {
  navigator.vibrate([100, 200, 200, 200, 500]);
}
