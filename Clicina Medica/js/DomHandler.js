export class DomHandler {
  static atualizarListaPaciente(pacientes) {
    const selectPaciente = document.getElementById("selectPaciente");
    selectPaciente.innerHTML = `<option value="">--Selecione um paciente--</option>`;

    pacientes.forEach((paciente) => {
      const option = document.createElement("option");
      option.value = paciente.nome;
      option.textContent = paciente.nome;
      selectPaciente.appendChild(option);
    });
  }

  static atualizarListaMedico(medicos) {
    const selectMedico = document.getElementById("selectMedico");
    selectMedico.innerHTML = `<option value="">--Selecione um médico--</option>`;

    medicos.forEach((medico) => {
      const option = document.createElement("option");
      option.value = medico.nome;
      option.textContent = medico.nome;
      selectMedico.appendChild(option);
    });
  }

  static exibirConsulta(mensagem) {
    const listaConsulta = document.getElementById("listaConsultas");

    // verificar se ja existe a consulta
    const consultas = Array.from(listaConsulta.getElementsByTagName("li"));
    const consultaExiste = consultas.some((li) => {
      return li.textContent.includes(mensagem);
    });

    if (consultaExiste) {
      alert("Ja foi marcada essa consulta");
      return;
    }

    //Criar o elemento da lista
    const li = document.createElement("li");
    li.classList.add("consulta-item");
    li.textContent = mensagem;

    //Criar botão de cancelar
    const btnCancelar = document.createElement("button");
    btnCancelar.textContent = "Cancelar";
    btnCancelar.classList.add("btn-cancelar");

    //Evento para remover a consulta ao clicar no botão
    btnCancelar.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(btnCancelar);
    listaConsulta.appendChild(li);
  }
}

// const handler = new DomHandler;
// DomHandler.atualizarListaMedico
