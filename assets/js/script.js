const displayAnswers = document.getElementsByClassName('answers');
let numArray = [];
let questionNumDisplay = 0;
let currentScore = 0;

function startQuiz() {
    document.getElementById('question-num').innerText = 1;
    let nextQuestion = document.getElementById('nextQ');
    nextQuestion.addEventListener('click', function(){
        pickQuestion();
        document.getElementById('answer1').style.backgroundColor = 'plum';
        document.getElementById('answer2').style.backgroundColor = 'plum';
        document.getElementById('answer3').style.backgroundColor = 'plum';
    })
}

startQuiz();

/**
 * Picks a random question from the questions array and checks to see if it was asked previously
 */
function pickQuestion() {
    // generate random number between 0 and 4
    let num = Math.floor(Math.random() * 5);
    
    if (numArray.includes(num)) {
        pickQuestion();
    } else {
        let question = questions[num].question;
        document.getElementById('question').innerText = question;
        questionNumDisplay++;
        if (questionNumDisplay >= 3) {
            endQuiz();
        } else {
            numArray.push(num);
            setAnswers(num);
        }
        
    }
    
    document.getElementById('question-num').innerText = questionNumDisplay;
    console.log(questionNumDisplay);
}

/**
 * Displays the possible answers to the question picked in pickQuestion function
 */
function setAnswers(num) {
    displayAnswers[0].innerText = questions[num].answers[0];
    displayAnswers[1].innerText = questions[num].answers[1];
    displayAnswers[2].innerText = questions[num].answers[2];
    checkAnswerClicked(num);
}

/**
 * Checks which answer the user clicked on and sends it to the checkAnswer function.
 */
function checkAnswerClicked(questionNum) {
    let answerBox1 = document.getElementById('answer1');
    let answerBox2 = document.getElementById('answer2');
    let answerBox3 = document.getElementById('answer3');
    let answerClicked = 0;
    
    answerBox1.addEventListener('click', function(){
        answerClicked = parseInt(document.getElementById('answer1').innerText);
        checkAnswer(questionNum, answerClicked, 1); 
    })

    answerBox2.addEventListener('click', function(){
        answerClicked = parseInt(document.getElementById('answer2').innerText);
        checkAnswer(questionNum, answerClicked, 2);
    })

    answerBox3.addEventListener('click', function(){
        answerClicked = parseInt(document.getElementById('answer3').innerText);
        checkAnswer(questionNum, answerClicked, 3);
    })   
    
}

function checkAnswer(questionNumber, answerPicked, answerBoxNum) {
    let correctAns = questions[questionNumber].correctAnswer;
    
    if (correctAns === answerPicked) {
        document.getElementById('question-response').innerText = "Correct answer. Well done.";
        document.getElementById(`answer${answerBoxNum}`).style.backgroundColor = 'green';
        incrementCorrectAnswers();
    } else {
        document.getElementById('question-response').innerText = "Incorrect answer. Better luck next time.";
        document.getElementById(`answer${answerBoxNum}`).style.backgroundColor = 'red';
    }

}

function incrementCorrectAnswers() {

    currentScore++;
    document.getElementById('correct-answers').innerText = currentScore;

}

function nextQuestion() {
    // document.getElementById('question-num').innerText += 1;
}

function endQuiz() {
    document.getElementById('nextQ').disabled = true;
    
}

function showResult() {

}

function resetGame() {

}