function searchPatinhas(nome) {
  $("#nome").empty();
  $("#idade").empty();
  $("#raca").empty();
  $("#sexo").empty();
  $("#cor").empty();
  $("#statusAdocao").empty();

  var settings = {
    async: true,
    crossDomain: true,
    url: "https://verdant-dusk-cde2e1.netlify.app/patinhas.json",
    method: "GET",
  };

  $.ajax(settings)
    .done(function (response) {
      var patinhas = response.patinhas;
      var found = false;
      for (var i = 0; i < patinhas.length; i++) {
        if (patinhas[i].nome.toLowerCase() === nome.toLowerCase()) {
          found = true;
          $("#nome").text("Nome: " + patinhas[i].nome);
          $("#idade").text("Idade: " + patinhas[i].idade);
          $("#raca").text("Raça: " + patinhas[i].raca);
          $("#sexo").text("Sexo: " + patinhas[i].sexo);
          $("#cor").text("Cor: " + patinhas[i].cor);
          $("#statusAdocao").text(
            "Status de Adoção: " + patinhas[i].statusAdocao
          );
          break;
        }
      }
      if (!found) {
        alert("Patinha não encontrada.");
      }
    })
    .fail(function () {
      alert("Erro ao carregar dados.");
    });
}

/* $.ajax(settings).done(function (response) {
    console.log(response);
    $('#nome').append(response.Nome);
    $('#idade').append(response.Idade);
    $('#raca').append(response.Raca);
  }); */
