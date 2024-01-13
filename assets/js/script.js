
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

function checkAnswerClicked() {
    let answerBox1 = document.getElementById('answer1');
    let answerBox2 = document.getElementById('answer2');
    let answerBox3 = document.getElementById('answer3');

    
        if (answerBox1.addEventListener('click', function(){
            let answerClicked = 1;
        }))
    
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