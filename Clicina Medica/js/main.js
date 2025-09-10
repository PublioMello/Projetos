import { Paciente } from "./Paciente.js";
import { Medico } from "./Medico.js";
import { DomHandler } from "./DomHandler.js";

let medicos = [];
let pacientes = [];

async function carregarDados() {
  try {
    const responseMedico = await fetch("./data/medicos.json");
    const medicosData = await responseMedico.json();
    // console.log(medicosData);
    // console.log(responseMedico)

    //Criar instância de médico
    medicos = medicosData.map(
      (medico) =>
        new Medico(medico.nome, medico.idade, medico.cpf, medico.especialidade)
    );

    const responsePaciente = await fetch("./data/pacientes.json");
    const pacienteData = await responsePaciente.json();
    // console.log(pacienteData);
    // console.log(responsePaciente);

    //Criar instância de paciente
    pacientes = pacienteData.map(
      ({ nome, idade, cpf }) => new Paciente(nome, idade, cpf)
    );

    //Atualizar a interface
    DomHandler.atualizarListaPaciente(pacientes);
    DomHandler.atualizarListaMedico(medicos);
  } catch (error) {
    console.error("Erro ao carregar os dados:", error);
  }
}
//Funcao para formatar data
function formatarData(data) {
  const [ano, mes, dia] = data.split("-");

  return `${dia}/${mes}/${ano}`;
}

//Função para agendar e exibir a consulta na tela
function agendarConsulta() {
  const pacienteSelecionado = document.getElementById("selectPaciente").value;
  const medicoSelecionado = document.getElementById("selectMedico").value;
  const dataSelecionada = document.getElementById("inputData").value;

  if (!pacienteSelecionado || !medicoSelecionado || !dataSelecionada) {
    alert("Por favor, selecione um paciente, um médico e uma data!");
  }

  const paciente = pacientes.find((p) => p.nome === pacienteSelecionado);

  const medico = medicos.find((m) => m.nome === medicoSelecionado);

  if (paciente && medico) {
    medico
      .agendarConsulta(paciente, formatarData(dataSelecionada))
      .then((mensagem) => {
        DomHandler.exibirConsulta(mensagem);
      });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  carregarDados();
  document
    .getElementById("btnAgendar")
    .addEventListener("click", agendarConsulta);
});

// const medico = new Medico(
//   "Dr.Fernando Dias",
//   40,
//   "123.455.786-90",
//   "Pediatria"
// );
// const paciente = new Paciente("Fabio Duarte", 10, "123.456.789.65");

// medico.agendarConsulta(paciente, "10/05/2025").then((mensagem) => {
//   console.log(mensagem);
// });
