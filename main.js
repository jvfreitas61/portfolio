function enviarWhats(event) {
  event.preventDefault();
  const nome = document.getElementById('nome').value;
  const mensagem = document.getElementById('mensagem').value;
  const telefone = '5561998599052';

  const texto = `Olá, me chamo ${nome}. ${mensagem}`;
  const msgFormatada = encodeURIComponent(texto);

  const url = `https://whatsa.me/${telefone}/?t=${msgFormatada}`;

  window.open(url, '_blank');
}

// Obtenha o modal e o elemento que fecha
var modal = document.getElementById("myModal");
var img = document.getElementsByClassName("img-projeto");
var modalImg = document.getElementById("img01");
var closeBtn = document.getElementsByClassName("close")[0];

// Adicione um listener de clique a cada imagem
for (var i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function() {
    modal.style.display = "block"; // Mostra o modal
    modalImg.src = this.src; // Define a imagem do modal
    // Para adicionar a legenda da imagem no modal:
    // var caption = document.getElementById("caption");
    // caption.innerHTML = this.alt;
  });
}

// Feche o modal ao clicar no botão de fechar
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Feche o modal ao clicar fora dele
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});