
const displayAnswers = document.getElementsByClassName('answers');
const questionArea = document.getElementsByClassName('question-area')[0];
const welcomeArea = document.getElementsByClassName('welcome-area')[0];
const start = document.getElementById('start');
let numArray = [];
let questionNumDisplay = 0;
let currentScore = 0;


document.addEventListener('DOMContentLoaded', function() {
    questionArea.style.display = 'none';
    start.addEventListener('click', checkName);
})

function checkName() {
    let name = document.getElementById('name').value;
    let warning = document.getElementById('warning-message');
    if  (name === '') {
        warning.innerText = 'You have not entered a name.';
        start.addEventListener('click', checkName);
    } else {
        // document.getElementById('name').innerText = name;
        // document.getElementById('question-num').innerText = 1;
        questionArea.style.display = 'block';
        welcomeArea.style.display = 'none';
        pickQuestion();
    }
}

/**
 * Picks a random question from the questions array and checks to see if it was asked previously
 */
function pickQuestion() {
    // generate random number between 0 and 7
    let num = Math.floor(Math.random() * 8);
    console.log(num);
    console.log(numArray);
    
    if (numArray.includes(num)) {
        pickQuestion();
    } else {
        let question = questions[num].question;
        document.getElementById('question').innerText = question;
        questionNumDisplay++;
        if (questionNumDisplay >= 5) {
            endQuiz();
        }

        numArray.push(num);
        setAnswers(num);        
        
    }
    
    document.getElementById('question-num').innerText = questionNumDisplay;
    
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
        currentScore++;
        document.getElementById('correct-answers').innerText = currentScore;
    } else {
        document.getElementById('question-response').innerText = "Incorrect answer. Better luck next time.";
        document.getElementById(`answer${answerBoxNum}`).style.backgroundColor = 'red';
    }
    nextQuestion();
}

function nextQuestion() {
    let nextQuestion = document.getElementById('nextQ');
    nextQuestion.addEventListener('click', function(){
        pickQuestion();
        document.getElementById('answer1').style.backgroundColor = 'plum';
        document.getElementById('answer2').style.backgroundColor = 'plum';
        document.getElementById('answer3').style.backgroundColor = 'plum';
        document.getElementById('question-response').innerText = "";
    })
}

function endQuiz() {
    document.getElementById('nextQ').disabled = true;
    
}

function showResult() {

}

function resetGame() {

}