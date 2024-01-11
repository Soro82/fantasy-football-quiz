
function startQuiz() {
    let nextQuestion = document.getElementById('nextQ');
    nextQuestion.addEventListener('click', function(){
        pickQuestion();
    })
}

startQuiz();


function pickQuestion() {
    let num = Math.floor(Math.random() * 5);
    let question = questions[num].question;
    document.getElementById('question').innerText = question;
    document.getElementById('question-num').innerText = num + 1;
    setAnswers(num);
}

function setAnswers(num) {
    let displayAnswers = document.getElementsByClassName('answers');

    displayAnswers[0].innerText = questions[num].answers[0];
    displayAnswers[1].innerText = questions[num].answers[1];
    displayAnswers[2].innerText = questions[num].answers[2];
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