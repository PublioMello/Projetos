import { useState } from "react";

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

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const current = questions[currentQuestion];

  function handleNext() {
    const isCorrect = selectedOption === current.answer;
    const nextScore = score + (isCorrect ? 1 : 0);

    if (currentQuestion === questions.length - 1) {
      setScore(nextScore);
      setShowResult(true);
      return;
    }

    if (isCorrect) setScore(nextScore);
    setCurrentQuestion((question) => question + 1);
    setSelectedOption(null);
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
  }

  return (
    <main className="quiz-container">
      {showResult ? (
        <section className="result-screen" aria-live="polite">
          <span className="result-icon" aria-hidden="true">🏆</span>
          <p className="eyebrow">Quiz concluído</p>
          <h1>Resultado</h1>
          <p className="score-text">
            Você acertou <strong>{score}</strong> de {questions.length}
          </p>
          <button type="button" className="primary-button" onClick={restartQuiz}>
            Jogar novamente
          </button>
        </section>
      ) : (
        <section className="question-screen" aria-live="polite">
          <div className="progress-row">
            <p className="progress">Pergunta {currentQuestion + 1} de {questions.length}</p>
            <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
          </div>
          <div className="progress-track" aria-hidden="true">
            <div
              className="progress-value"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>

          <h1>{current.question}</h1>

          <div className="options" role="radiogroup" aria-label="Alternativas">
            {current.options.map((option, index) => (
              <button
                className={`option-button ${selectedOption === index ? "selected" : ""}`}
                key={option}
                type="button"
                role="radio"
                aria-checked={selectedOption === index}
                onClick={() => setSelectedOption(index)}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                {option}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="primary-button"
            disabled={selectedOption === null}
            onClick={handleNext}
          >
            {currentQuestion === questions.length - 1 ? "Ver resultado" : "Próxima pergunta"}
            <span aria-hidden="true">→</span>
          </button>
        </section>
      )}
    </main>
  );
}
