/* script.js */
/* Author: Praveen kumar */

// Hardcoded values ko configuration object me store kiya hai
const CONFIG = {
  timePerQuestion: 15
};

// Quiz ke saare questions ka data
const questions = [
  {
    question: "HTML ka full form kya hai?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tabular Markup Language",
      "Home Tool Markup Language"
    ],
    answer: 0   
  },
  {
    question: "CSS me color change karne ke liye kaunsi property use hoti hai?",
    options: ["font-color", "text-color", "color", "background"],
    answer: 2
  },
  {
    question: "JavaScript me variable declare karne ke liye kaunsa keyword use hota hai?",
    options: ["var", "int", "string", "declare"],
    answer: 0
  },
  {
    question: "Kaunsa HTML tag sabse bada heading banata hai?",
    options: ["<h6>", "<heading>", "<h1>", "<head>"],
    answer: 2
  },
  {
    question: "JavaScript me array ki length kaise pata karte hain?",
    options: ["array.size()", "array.length", "array.count", "length(array)"],
    answer: 1
  }
];

// App ka state manage karne ke liye variables
let currentQuestion = 0;
let score = 0;
let timeLeft = CONFIG.timePerQuestion;
let timerInterval;
let answered = false;

// DOM Elements ko select karke rakhna taki baar baar DOM query na karni pade
const UI = {
  timer: document.querySelector("#timer"),
  nextBtn: document.getElementById('nextBtn'),
  questionNum: document.getElementById('questionNum'),
  questionText: document.getElementById('question'),
  optionsDiv: document.getElementById('options'),
  scoreDisplay: document.getElementById('score'),
  quizScreen: document.getElementById('quizScreen'),
  resultScreen: document.getElementById('resultScreen'),
  finalScore: document.getElementById('finalScore'),
  resultMsg: document.getElementById('resultMsg'),
  restartBtn: document.getElementById('restartBtn')
};

/**
 * Naya question load karne ka logic.
 * Purane timer ko reset karega aur UI update karega.
 */
const loadQuestion = () => {
  answered = false;
  timeLeft = CONFIG.timePerQuestion;
  UI.timer.textContent = timeLeft;
  UI.nextBtn.disabled = true;

  const currentQ = questions[currentQuestion];
  
  // Template literals ka use karke string formatting
  UI.questionNum.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  UI.questionText.textContent = currentQ.question;
  UI.optionsDiv.innerHTML = '';

  // Arrow functions ka use karke options render karna
  currentQ.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = option;
    btn.onclick = () => checkAnswer(index, btn);
    UI.optionsDiv.appendChild(btn);
  });

  startTimer();
};

/**
 * Timer shuru karne ka logic.
 * Har second me time kam karega aur agar time khatam hua toh timeUp() call karega.
 */
const startTimer = () => {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    UI.timer.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeUp();
    }
  }, 1000);
};

/**
 * User dwara select kiye gaye answer ko check karne ka logic.
 */
const checkAnswer = (selectedIndex, btn) => {
  if (answered) return;    
  answered = true;
  clearInterval(timerInterval);

  const correctIndex = questions[currentQuestion].answer;
  const allOptions = document.querySelectorAll('.option');

  // Saare options disable kar dena taki user doosra select na kar sake
  allOptions.forEach(o => o.disabled = true);

  if (selectedIndex === correctIndex) {
    btn.classList.add('correct');
    score++;
    UI.scoreDisplay.textContent = score;
  } else {
    btn.classList.add('wrong');
    allOptions[correctIndex].classList.add('correct');
  }

  UI.nextBtn.disabled = false;
};

/**
 * Time khatam hone par automatically answer check karne ka logic.
 */
const timeUp = () => {
  answered = true;
  const correctIndex = questions[currentQuestion].answer;
  const allOptions = document.querySelectorAll('.option');

  allOptions.forEach(o => o.disabled = true);
  allOptions[correctIndex].classList.add('correct');
  UI.nextBtn.disabled = false;
};

/**
 * Agle question par move karna ya result screen dikhana.
 */
const nextQuestion = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

/**
 * Quiz khatam hone par final result display karne ka logic.
 */
const showResult = () => {
  UI.quizScreen.classList.add('hide');
  UI.resultScreen.classList.remove('hide');

  UI.finalScore.textContent = `${score} / ${questions.length}`;

  let msg = '';
  const percent = (score / questions.length) * 100;
  
  if (percent === 100) msg = "Perfect score! 🏆 Tu toh genius hai!";
  else if (percent >= 60) msg = "Great job! 👏 Acchhi performance.";
  else if (percent >= 40) msg = "Not bad! Thoda aur practice kar. 💪";
  else msg = "Don't worry, agli baar better karega! 📚";

  UI.resultMsg.textContent = msg;
};

/**
 * Quiz ko shuru se restart karne ka logic.
 */
const restartQuiz = () => {
  currentQuestion = 0;
  score = 0;
  UI.scoreDisplay.textContent = 0;
  UI.resultScreen.classList.add('hide');
  UI.quizScreen.classList.remove('hide');
  loadQuestion();
};

// Event Listeners setup karna
UI.nextBtn.addEventListener('click', nextQuestion);
UI.restartBtn.addEventListener('click', restartQuiz);

// Window load hone pe pehla question initialize karna
window.onload = loadQuestion;