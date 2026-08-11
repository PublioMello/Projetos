// ==========================================
// DADOS (já prontos, não precisa mexer aqui)
// ==========================================
const questions = [
  {
    question: "Qual método adiciona um item ao final de um array em JS?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 0,
  },
  {
    question: "O que o CSS 'display: flex' faz?",
    options: [
      "Esconde o elemento",
      "Cria um container flexível para organizar os filhos",
      "Deixa o texto em negrito",
      "Aumenta a fonte",
    ],
    answer: 1,
  },
  {
    question: "Qual tag HTML é usada para criar um link?",
    options: ["<link>", "<a>", "<href>", "<nav>"],
    answer: 1,
  },
  {
    question: "Como declaramos uma variável que não pode ser reatribuída?",
    options: ["var", "let", "const", "static"],
    answer: 2,
  },
  {
    question: "Qual desses NÃO é um método de array?",
    options: ["map()", "filter()", "reduce()", "listen()"],
    answer: 3,
  },
];

// ==========================================
// ESTADO
// ==========================================
let currentQuestion = 0;
let score = 0;
let selectedOption = null;

// ==========================================
// REFERÊNCIAS DO DOM (já prontas)
// ==========================================
const progressEl = document.getElementById("progress");
const questionTextEl = document.getElementById("question-text");
const optionButtons = document.querySelectorAll(".option-btn");
const nextBtn = document.getElementById("next-btn");
const questionScreen = document.getElementById("question-screen");
const resultScreen = document.getElementById("result-screen");
const scoreTextEl = document.getElementById("score-text");
const restartBtn = document.getElementById("restart-btn");

// ==========================================
// FUNÇÕES — implemente a lógica aqui
// ==========================================

function renderQuestion() {
  // TODO: usar `questions[currentQuestion]` para:
  // - atualizar o texto de progressEl (ex: "Pergunta 2 de 5")
  // - atualizar o texto de questionTextEl
  // - atualizar o texto de cada botão em optionButtons com as opções da pergunta
  // - limpar classes "selected"/"correct"/"wrong" e reabilitar os botões
  // - desabilitar o botão "next-btn" até uma opção ser escolhida
}

function selectOption(index) {
  // TODO:
  // - guardar `index` em `selectedOption`
  // - marcar visualmente o botão clicado (classe "selected") e desmarcar os outros
  // - habilitar o botão "next-btn"
}

function checkAnswer() {
  // TODO:
  // - comparar `selectedOption` com `questions[currentQuestion].answer`
  // - se acertou, somar 1 em `score`
  // - (opcional) marcar visualmente certo/errado com as classes "correct"/"wrong"
}

function nextQuestion() {
  // TODO:
  // - chamar checkAnswer() para validar a resposta atual
  // - incrementar `currentQuestion`
  // - se ainda houver perguntas, chamar renderQuestion()
  // - se acabou, chamar showResult()
}

function showResult() {
  // TODO:
  // - esconder questionScreen e mostrar resultScreen (usar a classe "hidden")
  // - preencher scoreTextEl com a pontuação final (score / questions.length)
}

function restartQuiz() {
  // TODO:
  // - resetar currentQuestion, score e selectedOption
  // - esconder resultScreen e mostrar questionScreen
  // - chamar renderQuestion()
}

// ==========================================
// EVENTOS (já conectados)
// ==========================================
optionButtons.forEach((btn) => {
  btn.addEventListener("click", () => selectOption(Number(btn.dataset.index)));
});

nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartQuiz);

// Chamada inicial
renderQuestion();
