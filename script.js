const questions = [
  {
    question: "Who was the creator of Ravanabadha?",
    options: ["Kalidasa", "Bhatrahari", "Batsabhatti", "None of the above"],
    answer: "Batsabhatti"
  },
  {
    question: "Which of the following was a great center for the manufacturing of Shataka in the post-Mauryan times?",
    options: ["Varanasi", "Mathura", "Taxila", "Patliputra"],
    answer: "Mathura"
  },
  {
    question: "Which of the following was the reason behind the increase in the manufacture of oil in the post-Mauryan period?",
    options: ["Use of oil wheel", "Use of pumps", "More reserves found", "Oil was the center of the economy"],
    answer: "Use of oil wheel"
  },
  {
    question: "Which of the following forms of arts flourished in the post-Mauryan period? 1. Ivory work 2. Glass Manufacture 3. Bead cutting. Select the correct answer from the codes given below:",
    options: ["Only 1&2", "Only 2&3", "Only 1&3", "1, 2, & 3"],
    answer: "Only 1&2"
  },
  {
    question: "Which of the following types of coins were minted during the post-Mauryan period? 1. Gold 2. Silver 3. Copper. Select the correct answer from the codes given below: ",
    options: ["Only 1", "Only 2&3", "Only 1&3", "1, 2, & 3"],
    answer: "1,2&3"
  }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const questionElement = document.getElementById("question");
  const optionsForm = document.getElementById("options");
  const currentQ = questions[currentQuestion];

  questionElement.textContent = currentQ.question;
  optionsForm.innerHTML = ""; // Clear previous options

  currentQ.options.forEach((option, index) => {
    const optionLabel = document.createElement("label");
    optionLabel.innerHTML = `
      <input type="radio" id="option${index}" name="options" value="${option}">
      ${option}<br>
    `;
    optionsForm.appendChild(optionLabel);
  });
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="options"]:checked');

  if (!selectedOption) {
    alert("Please select an option");
    return;
  }

  const currentQ = questions[currentQuestion];
  const userAnswer = selectedOption.value;

  if (userAnswer === currentQ.answer) {
    score++;
    document.getElementById("result").textContent = "Correct!";
  } else {
    document.getElementById("result").textContent = "Wrong!";
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    displayQuestion(); // Move to the next question
  } else {
    showResult();
  }
}

function showResult() {
  const quizContainer = document.querySelector(".quiz-container");
  quizContainer.innerHTML = `<h1>Quiz Completed</h1>
    <p>Your score is ${score} out of ${questions.length}</p>`;
}

displayQuestion();