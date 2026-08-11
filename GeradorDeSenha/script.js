// ==========================================
// CONJUNTOS DE CARACTERES (já prontos)
// ==========================================
const CHAR_SETS = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}",
};

// ==========================================
// REFERÊNCIAS DO DOM (já prontas)
// ==========================================
const passwordOutput = document.getElementById("password-output");
const copyBtn = document.getElementById("copy-btn");
const copyFeedback = document.getElementById("copy-feedback");
const lengthInput = document.getElementById("length-input");
const lengthValue = document.getElementById("length-value");
const generateBtn = document.getElementById("generate-btn");

const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

// ==========================================
// UI simples, já pronta: mantém o número do
// slider sincronizado com o label
// ==========================================
lengthInput.addEventListener("input", () => {
  lengthValue.textContent = lengthInput.value;
});

// ==========================================
// FUNÇÕES — implemente a lógica aqui
// ==========================================

function generatePassword() {
  // TODO:
  // 1. Ler o tamanho desejado em `lengthInput.value`
  // 2. Montar uma string com os caracteres disponíveis, juntando os
  //    conjuntos de CHAR_SETS cujo checkbox correspondente está marcado
  //    (uppercaseCheckbox.checked, lowercaseCheckbox.checked, etc.)
  // 3. Se nenhum checkbox estiver marcado, avisar o usuário (ex: alert)
  // 4. Sortear `tamanho` caracteres aleatórios desse conjunto
  //    (dica: Math.random() e Math.floor())
  // 5. Colocar o resultado em `passwordOutput.value`
}

function copyPassword() {
  // TODO:
  // 1. Se não houver senha gerada, não fazer nada
  // 2. Usar navigator.clipboard.writeText(passwordOutput.value)
  // 3. Mostrar o `copyFeedback` por ~1.5s (remover a classe "hidden"
  //    e depois adicioná-la de novo com setTimeout)
}

// ==========================================
// EVENTOS (já conectados)
// ==========================================
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);
