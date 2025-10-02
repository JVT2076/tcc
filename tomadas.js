let dadosMedidores = {};

// Carrega os dados do JSON
fetch("dados/tomadas.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Erro ao carregar o JSON de tomadas");
    }
    return response.json();
  })
  .then(dados => {
    dadosMedidores = dados; // guarda os dados carregados
  })
  .catch(err => console.error(err));

const select = document.getElementById("escolha-tomada");
const info = document.getElementById("infoTomada");

// Quando o usuário mudar a seleção:
select.addEventListener("change", () => {
  const tomadaEscolhida = select.value;

  if (tomadaEscolhida && dadosMedidores[tomadaEscolhida]) {
    const dados = dadosMedidores[tomadaEscolhida];
    info.innerHTML = `
      <h2>Informações da ${tomadaEscolhida}</h2>
      <p><strong>Consumo:</strong> ${dados.consumo} W</p>
      <p><strong>Impacto na conta:</strong> ${dados.impacto} R$/Hora</p>
    `;
  } else {
    info.innerHTML = `<p style="color:red;">Selecione uma tomada válida.</p>`;
  }
});
