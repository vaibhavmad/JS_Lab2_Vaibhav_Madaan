// index.js

// Questions for the quiz
const questions = [
    {
        question: "What does HTML stand for?",
        choices: [
            "Hyper Text Markup Language",
            "High Text Markup Language",
            "Hyper Tabular Markup Language",
            "None of these"
        ],
        correctAnswer: 0
    },
    {
        question: "What does CSS stand for?",
        choices: [
            "Cascading Style Sheets",
            "Colorful Style Sheets",
            "Computer Style Sheets",
            "Creative Style Sheets"
        ],
        correctAnswer: 0
    },
    {
        question: "What does JS stand for?",
        choices: [
            "JavaScript",
            "JavaSource",
            "JustScript",
            "JollyScript"
        ],
        correctAnswer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        document.getElementById('choice' + i).textContent = currentQuestion.choices[i];
    }
    document.getElementById('progress').textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function checkAnswer(choiceIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (choiceIndex === currentQuestion.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const quizDiv = document.getElementById('quiz');
    const scorePercentage = (score / questions.length) * 100;
    quizDiv.innerHTML = `
        <h1>Quiz Completed</h1>
        <p id="score">You scored ${score} out of ${questions.length}</p>
        <p id="scorePercentage">Your score: ${scorePercentage.toFixed(2)}%</p>
    `;
}

// Attach event listeners to buttons
document.getElementById('btn0').onclick = () => checkAnswer(0);
document.getElementById('btn1').onclick = () => checkAnswer(1);
document.getElementById('btn2').onclick = () => checkAnswer(2);
document.getElementById('btn3').onclick = () => checkAnswer(3);

// Load the first question
loadQuestion();
