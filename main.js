function enviarWhats(event) {
  event.preventDefault();
  const nome = document.getElementById('nome').value;
  const mensagem = document.getElementById('mensagem').value;
  const telefone = '5561992322122';

  const texto = `Olá, me chamo ${nome}, ${mensagem}`;
  const msgFormatada = encodeURIComponent(texto);

  const url = `https://whatsa.me/${telefone}/?t=${msgFormatada}`;

  window.open(url, '_blank');
}
