let dadosMedidores = {};

// Carrega os dados do JSON
fetch("dados/medidores.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Erro ao carregar o JSON de medidores");
    }
    return response.json();
  })
  .then(dados => {
    dadosMedidores = dados; // guarda os dados carregados
  })
  .catch(err => console.error(err));

const select = document.getElementById("escolha-medidor");
const info = document.getElementById("infoMedidor");

// Quando o usuário mudar a seleção:
select.addEventListener("change", () => {
  const medidorEscolhido = select.value;

  if (medidorEscolhido && dadosMedidores[medidorEscolhido]) {
    const dados = dadosMedidores[medidorEscolhido];
    info.innerHTML = `
      <h2>Informações do ${medidorEscolhido}</h2>
      <p><strong>Consumo:</strong> ${dados.consumo} W</p>
      <p><strong>Impacto na conta:</strong> ${dados.impacto} R$/Hora</p>
    `;
  } else {
    info.innerHTML = `<p style="color:red;">Selecione um medidor válido.</p>`;
  }
});
