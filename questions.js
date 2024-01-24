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

export default questions;
