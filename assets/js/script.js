const displayAnswers = document.getElementsByClassName('answers');
let numArray = [];

function startQuiz() {
    let nextQuestion = document.getElementById('nextQ');
    nextQuestion.addEventListener('click', function(){
        pickQuestion();
    })
}

startQuiz();


function pickQuestion() {
    let num = Math.floor(Math.random() * 5);    
    
    if (numArray.includes(num)) {
        pickQuestion();
    } else {
        let question = questions[num].question;
        document.getElementById('question').innerText = question;
        document.getElementById('question-num').innerText = num + 1;
        numArray.push(num);
        setAnswers(num);
    }
    
    
    console.log(numArray);
}

function setAnswers(num) {
    displayAnswers[0].innerText = questions[num].answers[0];
    displayAnswers[1].innerText = questions[num].answers[1];
    displayAnswers[2].innerText = questions[num].answers[2];
    checkAnswerClicked(num);
}

function checkAnswerClicked(questionNum) {
    let answerBox1 = document.getElementById('answer1');
    let answerBox2 = document.getElementById('answer2');
    let answerBox3 = document.getElementById('answer3');
    let answerClicked = 0;
    
    answerBox1.addEventListener('click', function(){
        answerClicked = parseInt(document.getElementById('answer1').innerText);
        checkAnswer(questionNum, answerClicked); 
    })

    answerBox2.addEventListener('click', function(){
        answerClicked = parseInt(document.getElementById('answer2').innerText);
        checkAnswer(questionNum, answerClicked);
    })

    answerBox3.addEventListener('click', function(){
        answerClicked = parseInt(document.getElementById('answer3').innerText);
        checkAnswer(questionNum, answerClicked);
    })   
    
}

function checkAnswer(questionNumber, answerPicked) {
    let correctAns = questions[questionNumber].correctAnswer;
    
    if (correctAns === answerPicked) {
        console.log('Correct answer');
        incrementCorrectAnswers();
    } else {
        console.log('Incorrect answer');
    }

}

function incrementCorrectAnswers() {
    let currentScore = 0;
    currentScore++;
    document.getElementById('correct-answers').innerText = currentScore;

}

function nextQuestion() {

}

function showResult() {

}

function resetGame() {

}