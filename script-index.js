const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('meuBotao').onclick = function() {
    window.location.href = 'ap-conectados.html';
};

fetch("dados/dados.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Erro ao carregar o JSON");
    }
    return response.json();
  })
  .then(dados => {
    document.getElementById("consumo").textContent = dados.consumo;
    document.getElementById("preco").textContent = dados.preco;
    document.getElementById("impacto").textContent = dados.impacto;
  })
  .catch(err => console.error(err));