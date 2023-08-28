let currentQuestion = 1;

function showNextQuestion(nextQuestion) {
  const currentQuestionElement = document.getElementById(
    `question${currentQuestion}`
  );
  const nextQuestionElement = document.getElementById(
    `question${nextQuestion}`
  );

  currentQuestionElement.style.display = "none";
  nextQuestionElement.style.display = "block";

  currentQuestion = nextQuestion;
}
