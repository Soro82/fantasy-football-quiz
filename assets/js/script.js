
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
    let questionNum = num;
    checkAnswerClicked(num);
}

function checkAnswerClicked(questionNum) {
    let answerBox1 = document.getElementById('answer1');
    let answerBox2 = document.getElementById('answer2');
    let answerBox3 = document.getElementById('answer3');
    let answerClicked = 0;
    let currentQuestion = questionNum;

    answerBox1.addEventListener('click', function(){
        answerClicked = 1;
    })

    answerBox2.addEventListener('click', function(){
        answerClicked = 2;
    })

    answerBox3.addEventListener('click', function(){
        answerClicked = 3;
    })
    // checkAnswer(currentQuestion, answerClicked);
    console.log(questionNum);
    console.log(answerClicked);
    
}

function checkAnswer(answer) {
    

}

function incrementCorrectAnswers() {

}

function nextQuestion() {

}

function showResult() {

}

function resetGame() {

}