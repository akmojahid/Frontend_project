let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;


function loadQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("questionText").innerText = question.question;
  //document.getElementById("currentQuestion").innerText = currentQuestionIndex + 1;
  document.getElementById("feedback").innerText = "";
  document.getElementById("nextButton").style.display = "none";

  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = "";

  question.options.forEach(option => {
    const optionElement = document.createElement("div");

    optionElement.classList.add("option");

    optionElement.innerText = option;
    optionElement.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(optionElement);
  });
}

function checkAnswer(selectedOption) {

  const question = questions[currentQuestionIndex];
  const feedback = document.getElementById("feedback");

  if (selectedOption === question.correctAnswer) {
    correctCount++
    document.getElementById("correctCount").innerText = correctCount;
    feedback.innerText = "Correct!";
    feedback.style.color = "#00cc00";

  } else {
    wrongCount++
    document.getElementById("wrongCount").innerText = wrongCount;
    feedback.innerText = `Wrong! The correct answer is: ${question.correctAnswer}`;
    feedback.style.color = "#ff3333";
  }

  document.getElementById("nextButton").style.display = "inline-block";
}

function showNextQuestion() {


  document.documentElement.style.setProperty('--question-index', `"${(currentQuestionIndex +1)+ '/' + questions.length +' '}"`);
  document.querySelector('#q_bar').style.cssText = `width: ${(100 / questions.length * currentQuestionIndex) + 1}%;`
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    // If quiz is over, display results
    document.getElementById("questionText").innerText = "Quiz Completed!";
    document.getElementById("optionsContainer").innerHTML = `<div class="option a">Correct: ${correctCount}</div> <div class="option b">wrong: ${wrongCount}</div>`;
    document.getElementById("feedback").innerText = `Final Score: ${correctCount} Correct, ${wrongCount} Wrong`;
    document.getElementById("nextButton").style.display = "none";
  }
}

// Load the first question when the page loads
loadQuestion();