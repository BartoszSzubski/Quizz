const questions = [
  {
    question:
      "What is the difference between 'let', 'const', and 'var' in JavaScript for variable declaration?",
    answers: [
      {
        text: "'let' is block-scoped, 'const' is function-scoped, 'var' is block-scoped.",
        correct: false,
      },
      {
        text: "'let' is block-scoped, 'const' is block-scoped and cannot be reassigned, 'var' is function-scoped.",
        correct: true,
      },
      {
        text: "'let' is function-scoped, 'const' is block-scoped, 'var' is block-scoped.",
        correct: false,
      },
      {
        text: "There is no difference; they are interchangeable.",
        correct: false,
      },
    ],
  },
  {
    question: "In CSS, explain the difference between 'em' and 'rem' units.",
    answers: [
      {
        text: "'em' is relative to the font-size of the closest parent or the element itself, while 'rem' is relative to the font-size of the root element (html).",
        correct: true,
      },
      {
        text: "'em' is always relative to the font-size of the root element, while 'rem' is relative to the font-size of the closest parent or the element itself.",
        correct: false,
      },
      {
        text: "'em' is fixed, while 'rem' is relative to the viewport size.",
        correct: false,
      },
      {
        text: "There is no significant difference between 'em' and 'rem' units.",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is the purpose of the 'use strict' statement in JavaScript?",
    answers: [
      {
        text: "It allows for lax and flexible syntax in JavaScript, making it easier for developers.",
        correct: false,
      },
      {
        text: "It is used to include external JavaScript libraries.",
        correct: false,
      },
      {
        text: "It enforces a more secure and error-free coding style by catching common mistakes and preventing the use of some error-prone features.",
        correct: true,
      },
      {
        text: "It is a comment and does not affect the behavior of the code.",
        correct: false,
      },
    ],
  },
  {
    question: "How does the CSS Flexbox 'order' property work?",
    answers: [
      {
        text: "It sets the order of the entire flex container in the document flow.",
        correct: false,
      },
      {
        text: "It adjusts the order of child elements within a flex item.",
        correct: false,
      },
      {
        text: "It determines the order of flex lines in a multi-line flex container.",
        correct: false,
      },
      {
        text: "It specifies the order in which a flex item should appear in the flex container.",
        correct: true,
      },
    ],
  },
  {
    question:
      "What is the purpose of the 'async' and 'await' keywords in JavaScript?",
    answers: [
      {
        text: "They are used for asynchronous programming, allowing the creation of functions that return Promises and can be awaited.",
        correct: true,
      },
      {
        text: "They define functions that are immediately invoked when the page loads.",
        correct: false,
      },
      {
        text: "They are used to handle errors in JavaScript code.",
        correct: false,
      },
      {
        text: "They are used for defining classes and object-oriented programming in JavaScript.",
        correct: false,
      },
    ],
  },
  {
    question: "Explain the concept of 'event delegation' in JavaScript.",
    answers: [
      {
        text: "It involves using a single event listener to manage all the related events for a group of elements, reducing the number of event listeners.",
        correct: true,
      },
      {
        text: "It refers to the process of triggering multiple events simultaneously.",
        correct: false,
      },
      {
        text: "It is a technique for handling asynchronous events in JavaScript.",
        correct: false,
      },
      {
        text: "It is a way to delegate the handling of events to the browser's default behavior.",
        correct: false,
      },
    ],
  },
  {
    question: "What is a closure in JavaScript, and how is it useful?",
    answers: [
      {
        text: "Closure in JavaScript combines a function with its surrounding environment, enabling access to external variables even after their scope has ended.",
        correct: true,
      },
      {
        text: "A closure is a function that is immediately invoked upon its declaration.",
        correct: false,
      },
      { text: "A closure is a function with no parameters.", correct: false },
      { text: "A closure is an anonymous function.", correct: false },
    ],
  },
  {
    question: "What is the BEM (Block, Element, Modifier) methodology in CSS?",
    answers: [
      {
        text: "BEM stands for 'Browser Extension Module' and is used for building browser extensions in CSS.",
        correct: false,
      },
      {
        text: "BEM is a JavaScript library for building interactive user interfaces.",
        correct: false,
      },
      {
        text: "BEM is a naming convention for classes in HTML and CSS that follows a modular and structured approach, making it easier to understand and maintain the codebase.",
        correct: true,
      },
      {
        text: "BEM is a design pattern for building databases in CSS.",
        correct: false,
      },
    ],
  },
  {
    question: "What is the difference between '===' and '==' in JavaScript?",
    answers: [
      {
        text: "'==' performs loose equality, checking only the value.",
        correct: false,
      },
      {
        text: "'===' and '==' are interchangeable and have the same behavior.",
        correct: false,
      },
      {
        text: "'==' performs strict equality, checking both value and type.",
        correct: false,
      },
      {
        text: "'===' performs strict equality, checking both value and type.",
        correct: true,
      },
    ],
  },
  {
    question: "What is the purpose of the '@media' rule in CSS?",
    answers: [
      {
        text: "It defines a media query to select specific HTML elements.",
        correct: false,
      },
      {
        text: "It is used to apply styles based on the characteristics of the device, such as its width, height, and color depth.",
        correct: true,
      },
      {
        text: "It is a directive for importing external media files, such as images and videos.",
        correct: false,
      },
      {
        text: "It specifies the media type of the stylesheet, such as 'screen' or 'print'.",
        correct: false,
      },
    ],
  },
];

const questionCaption = document.querySelector(".question");
const answerBtns = document.querySelector(".answer-buttons");
const nextBtn = document.querySelector(".next");

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  removePrevious();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
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
  }
});

startGame();
