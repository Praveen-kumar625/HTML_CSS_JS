// Quiz questions ka data array
const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborghinis",
        correct: "a",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
       question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",   
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

// HTML elements ko select kar rahe hain
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const timeEl = document.getElementById('time');

let currentQuiz = 0;
let score = 0;
let timeLeft = 15; // Ek question ke liye 15 seconds
let timer;

loadQuiz();

// Quiz load karne wala function
function loadQuiz() {
    deselectAnswers();
    resetTimer();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

// Answer selection hataane ke liye
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

// User ne kya select kiya wo check karne ke liye
function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

// Timer reset aur start karne ke liye
function resetTimer() {
    clearInterval(timer);
    timeLeft = 15;
    timeEl.innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timeEl.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            // Time khatam hone par agla question
            handleNextQuestion();
        }
    }, 1000);
}

// Agle question par jaane ki logic
function handleNextQuestion() {
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
    }

    currentQuiz++;

    if(currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        clearInterval(timer);
        // Result dikhane ke liye HTML change
        quiz.innerHTML = `
            <h2>Aapne ${score}/${quizData.length} questions sahi kiye!</h2>
            <button onclick="location.reload()">Reload</button>
        `;
    }
}

// Submit button par click event
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    if(answer) {
        handleNextQuestion();
    } else {
        alert("Pehle answer select karein!");
    }
});
