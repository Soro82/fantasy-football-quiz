
function startQuiz() {
    let nextQuestion = document.getElementById('nextQ');
    nextQuestion.addEventListener('click', function(){
        console.log('question');
        pickQuestion();
    })
}

startQuiz();

function pickQuestion() {
    let question = questions[0].question;
    console.log(question);
    document.getElementById('question').innerText = question;
}

function setAnswers() {

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