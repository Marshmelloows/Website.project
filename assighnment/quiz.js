// Question includes category, question, choices, correct index, and explanation.
 
const questions = [
// Question 1: HTML terminology.
{
category: "HTML",
question: "What does HTML stand for?",
options: [
"HyperText Markup Language",
"HyperText Markdown Language",
"HighText Markup Language",
"Hyper Transfer Markup Language"
],
correctAnswer: 0,
explanation: "HTML stands for HyperText Markup Language and is used to structure web pages."
},
 
// Question 2: HTML line breaks.
{
category: "HTML",
question: "The <br> tag creates a line break.",
options: ["True", "False"],
correctAnswer: 0,
explanation: "The br element inserts a line break in the document."
},
 
// Question 3: CSS terminology.
{
category: "CSS",
question: "What does CSS stand for?",
options: [
"Cascading Style Sheets",
"Computer Style Sheets",
"Creative Style Sheets",
"Colorful Style Sheets"
],
correctAnswer: 0,
explanation: "CSS controls the appearance and layout of web pages."
},
 
// Question 4: JavaScript debugging.
{
category: "JavaScript",
question: "Which method prints to the browser console?",
options: [
"console.log()",
"print()",
"write()"
],
correctAnswer: 0,
explanation: "console.log() is commonly used for debugging."
},
    
// Question 5: HTTP status codes.
{
category: "HTTP",
question: "HTTP status code 404 means a resource was not found.",
options: ["True", "False"],
correctAnswer: 0,
explanation: "404 Not Found means the server could not locate the requested resource."
},
 
// Question 6: HTML links.
{
category: "HTML",
question: "Which HTML element creates a hyperlink?",
options: ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;", "&lt;url&gt;"],
correctAnswer: 0,
explanation: "The <a> element creates a hyperlink, and its href attribute stores the destination URL."
},
 
// Question 7: CSS selectors.
{
category: "CSS",
question: "Which CSS selector targets an element with the id \"header\"?",
options: [".header", "#header", "header", "*header"],
correctAnswer: 1,
explanation: "The hash symbol selects an element by its id, so #header targets id=\"header\"."
},
 
// Question 8: JavaScript variables.
{
category: "JavaScript",
question: "Which keyword declares a block-scoped variable that can be reassigned?",
options: ["const", "let", "varies", "fixed"],
correctAnswer: 1,
explanation: "The let keyword declares a block-scoped variable whose value can be changed later."
},
 
// Question 9: HTTP request methods.
{
category: "HTTP",
question: "Which HTTP method is commonly used to retrieve data from a server?",
options: ["GET", "SEND", "FETCH", "READ"],
correctAnswer: 0,
explanation: "GET requests are commonly used to request or retrieve data from a server."
},
 
// Question 10: Web accessibility.
{
category: "Accessibility",
question: "What is the purpose of an image's alt attribute?",
options: [
"To provide alternative text describing the image",
"To change the image's size",
"To add a video to the page",
"To hide the image from all users"
],
correctAnswer: 0,
explanation: "The alt attribute provides a text alternative for users who cannot see the image."
}
];

let currentQuestionIndex = 0;
let score = 0;
let answeredQuestions = []; // Array to track answered questions

const questionNumberElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextButton");
const scoreElement = document.getElementById("score");


function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-button");
        button.addEventListener("click", () => selectAnswer(index));
        optionsElement.appendChild(button);
    });
  }
  function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuestion.correctAnswer;
    if (isCorrect) {
        score++;
    }
    else {
        alert(`Incorrect! ${currentQuestion.explanation}`);
    }
    document.querySelectorAll(".option-button").forEach(button => button.disabled = true);
  }
  nextButton.addEventListener("click", () => {
    answeredQuestions.push(currentQuestionIndex);
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
  });
  function showFinalScore() {
    questionNumberElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = "";
    scoreElement.textContent = `Your final score is ${score} out of ${questions.length}.`;
    nextButton.style.display = "none";
  }

  loadQuestion();


//
//track where i am in the quiz and what questions i have answered

//To track your progress in the quiz and which questions you have answered, you can create a simple state management system using JavaScript. Here's an example of how you can implement this: