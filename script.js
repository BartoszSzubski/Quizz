import questions from "./questions.js";

const questionCaption = document.querySelector(".question");
const answerBtns = document.querySelector(".answer-buttons");
const nextBtn = document.querySelector(".next");
const gameContainer = document.querySelector(".app");
const beforeContainer = document.querySelector(".before-game");

let currentQuestionIndex = 0;
let score = 0;

function beforeGame() {
  beforeContainer.style.visibility = "visible";
  gameContainer.style.visibility = "hidden";
  questionCaption.innerHTML =
    "Welcome to our thrilling quiz adventure! 🌟 Are you prepared to challenge your knowledge? 🧠 Get ready for a journey of questions and answers that will test your wits and keep you entertained. 🚀 Let the quiz excitement begin!";
  nextBtn.innerHTML = "Start game";
  answerBtns.style.visibility = "hidden";
}
function startGame() {
  beforeContainer.style.visibility = "hidden";
  gameContainer.style.visibility = "visible";
  answerBtns.style.visibility = "visible";
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  removePrevious();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;
  questionCaption.innerHTML = questionNumber + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtns.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function removePrevious() {
  nextBtn.style.display = "none";
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerBtns.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

function showScore() {
  removePrevious();
  const percentage = Math.round((score / questions.length) * 100);

  if (percentage >= 90) {
    questionCaption.innerHTML = `Outstanding! You scored ${score} out of ${questions.length}, achieving an exceptional ${percentage}% success rate. 
    You're a true expert! Ready for another round? Click "Play Again" to test your knowledge.`;
  } else if (percentage >= 80) {
    questionCaption.innerHTML = `Excellent! You scored ${score} out of ${questions.length}, with an impressive ${percentage}% success rate.
    You're doing great! Click "Play Again" to challenge yourself again.`;
  } else if (percentage >= 60) {
    questionCaption.innerHTML = `Well done! You scored ${score} out of ${questions.length}, with a solid ${percentage}% success rate. 
    Keep it up! Click "Play Again" to continue improving.`;
  } else if (percentage >= 40) {
    questionCaption.innerHTML = `Good effort! You scored ${score} out of ${questions.length}, with a respectable ${percentage}% success rate. 
    There's room for improvement! Click "Play Again" to review and try again.`;
  } else {
    questionCaption.innerHTML = `Nice try! You scored ${score} out of ${questions.length}, with a ${percentage}% success rate. 
    Keep learning and click "Play Again" for another attempt.`;
  }

  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
  toggleAppHeight();
}
const appContainer = document.querySelector(".expanded");
function toggleAppHeight() {
  appContainer.classList.toggle("expanded");
}

nextBtn.addEventListener("click", () => {
  if (nextBtn.innerHTML === "Next") {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestion();
    } else {
      showScore();
      nextBtn.innerHTML = "Play Again";
    }
  } else {
    startGame();
    nextBtn.innerHTML = "Next";
    toggleAppHeight();
  }
});

beforeGame();
