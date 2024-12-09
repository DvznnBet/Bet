// Exemplo básico de JavaScript para interatividade
document.addEventListener("DOMContentLoaded", function() {
  // Mostrar um alerta quando o usuário clicar no botão de aposta
  const betButton = document.getElementById("bet-button");
  if (betButton) {
    betButton.addEventListener("click", function() {
      alert("Aposta registrada!");
    });
  }

  // Contagem de apostas feitas
  let betCount = 0;
  const betCounter = document.getElementById("bet-counter");

  if (betCounter) {
    betButton.addEventListener("click", function() {
      betCount++;
      betCounter.innerText = "Apostas feitas: " + betCount;
    });
  }
});