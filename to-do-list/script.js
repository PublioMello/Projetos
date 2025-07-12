//descobre a lista principal
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

function addTask() {
  const task = taskInput.value;
  if (task !== "") {
    // ajusta a pirmeira letra como maiuscula

    const formattedTask = adjustLetters(task);
    //cria uma nova linha independente
    const newLi = document.createElement("li");

    //Cria o botao
    const removeButton = document.createElement("button");
    removeButton.textContent = "Apagar item";
    removeButton.id = "removeBt";
    removeButton.onclick = function () {
      taskList.removeChild(newLi);
    };
    //adiciona o valor a lista
    newLi.textContent = formattedTask;
    newLi.appendChild(removeButton);

    //adiciona o valor a linha da lista
    taskList.appendChild(newLi);

    // removeButton.addEventListener("click", function () {
    //   taskList.removeChild(newLi);
    // });

    // taskInput.adjustLetters();
    //apaga o valor escrito e poe foco para continuar escrevendo
    taskInput.value = "";
    taskInput.focus();
  } else {
    alert("Digite algo");
  }
}
function adjustLetters(text) {
  // Lista de exceções com a formatação exata que deve ser mantida
  const exept = {
    mid: "Mid",
    data: "Data",
    in: "in",
    on: "on",
  };

  return text
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => {
      // Verifica se a palavra (em minúsculo) está nas exceções
      if (exept.hasOwnProperty(word)) {
        return exept[word]; // Retorna exatamente como está na lista
      }
      // Palavras curtas (≤4 letras) ficam em MAIÚSCULAS
      if (word.length <= 4) {
        return word.toUpperCase();
      }
      // Demais palavras: primeira letra maiúscula
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

// miD iN  on ajsh pdf sDe dATa
