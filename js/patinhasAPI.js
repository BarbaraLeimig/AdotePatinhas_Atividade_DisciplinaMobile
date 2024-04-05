function searchPatinhas(nome) {
    const url = 'https://adote-patinhas.netlify.app/data/patinhas.json/?t=' + nome;
    
    // Realiza uma solicitação AJAX para obter os dados do JSON
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const patinhas = data.patinhas;
  
        // Procura pela patinha com o nome fornecido
        const resultado = patinhas.find(patinha => patinha.nome === nome);
  
        // Exibe o resultado
        if (resultado) {
          console.log('Patinha encontrada:', resultado);
        } else {
          console.log('Patinha não encontrada');
        }
      }
    };
    xhr.send();
  }
  


















/* function searchPatinha() {
  $('#nome').empty();
  $('#idade').empty();
  $('#raca').empty();
  $('#sexo').empty();
  $('#cor').empty();
  $('#statusAdocao').empty();

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://adote-patinhas.netlify.app/data/patinhas.json",
    "method": "GET"
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    $('')
  });

}
 */