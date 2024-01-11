
function startQuiz() {
    let nextQuestion = document.getElementById('nextQ');
    nextQuestion.addEventListener('click', function(){
        pickQuestion();
    })
}

startQuiz();


function pickQuestion() {
    let question = questions[0].question;
    document.getElementById('question').innerText = question;
    setAnswers();
}

function setAnswers() {
    let displayAnswers = document.getElementsByClassName('answers');

    displayAnswers[0].innerText = questions[0].answers[0];
    displayAnswers[1].innerText = questions[0].answers[1];
    displayAnswers[2].innerText = questions[0].answers[2];
}

function checkAnswer() {

}

function incrementCorrectAnswers() {

}

function nextQuestion() {

}

function showResult() {

}

function resetGame() {

}