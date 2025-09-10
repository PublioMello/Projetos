// Dado formulario
const formulario = document.getElementById("formulario");

// Validacao nome somente letras
function isValidName(string) {
  for (let index = 0; index < string.length; index++) {
    let char = string[index];

    if (
      !(
        (char >= "A" && char <= "Z") ||
        (char >= "a" && char <= "z") ||
        char === " "
      )
    ) {
      return false;
    }
  }
  return true;
}

//Funcao validacao CPF
function isValidCPF(cpf) {
  return cpf.length === 11 && !isNaN(cpf);
}

// Funcao validacao telefone
function isValidPhone(telefone) {
  return telefone.length === 11 && !isNaN(telefone);
}

// Funcao validacaoa cep
function isValidCep(cep) {
  return cep.length === 8 && !isNaN(cep);
}

// Funcao validacao do estado(letra maiuscula e 2 letras)
function isValidState(state) {
  return (
    state.length === 2 &&
    "A" <= state[0] &&
    state[0] <= "Z" &&
    "A" <= state[1] &&
    state[1] <= "Z"
  );
}

// funcao realizar validacoes
function validarEGuardarFormulario(evento) {
  evento.preventDefault();

  //obter valores do input
  const nome = document.getElementById("nome").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const cep = document.getElementById("cep").value.trim();
  const rua = document.getElementById("rua").value.trim();
  const numero = document.getElementById("numero").value.trim();
  const complemento = document.getElementById("complemento").value.trim();
  const bairro = document.getElementById("bairro").value.trim();
  const cidade = document.getElementById("cidade").value.trim();
  const estado = document.getElementById("estado").value.trim();

  if (
    !nome ||
    !cpf ||
    !telefone ||
    !cep ||
    !rua ||
    !numero ||
    !complemento ||
    !bairro ||
    !cidade ||
    !estado
  ) {
    alert("Preencha todos os dados");
    return;
  }

  if (!isValidName(nome)) {
    alert("O nome deve conter apenas letras e espaços!");
    return;
  }
  if (!isValidCPF(cpf)) {
    alert("O CPF deve ter 11 digitos numéricos");
    return;
  }
  if (!isValidPhone(telefone)) {
    alert("O telefone deve ter 11 digitos numéricos");
    return;
  }
  if (!isValidCep(cep)) {
    alert("O CEP deve ter 8 digitos numéricos");
    return;
  }
  if (!isValidState(estado)) {
    alert("O estado deve ser uma sigla de letras maiúsculas");
  }
  // Se tudo estver correto salvar no local storage
  const dadosFormulario = {
    nome,
    cpf,
    telefone,
    cep,
    rua,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
  };

  localStorage.setItem("dadosFormulario", JSON.stringify(dadosFormulario));
  formulario.reset();
  alert("Dados salvos com sucesso!");
}

// adicionar evento de subimissao do formulario

formulario.addEventListener("submit", validarEGuardarFormulario);
