


const displayAnswers = document.getElementsByClassName('answers');
const questionArea = document.getElementsByClassName('question-area')[0];
const welcomeArea = document.getElementsByClassName('welcome-area')[0];

let numArray = [];
let questionNumDisplay = 0;
let currentScore = 0;
let questionNum = 0;
let num;
let answerBoxPicked = 0;


document.addEventListener('DOMContentLoaded', function() {

    let answers = document.getElementsByClassName('answers');

    for (let answer of answers) {
        answer.addEventListener('click', function() {
            answerBoxPicked = answer;
            console.log(answerBoxPicked);
        });       
       
    }
    questionArea.style.display = 'none';
    document.getElementById('start').addEventListener('click', checkName);
    document.getElementById('nextQ').addEventListener('click', nextQuestion);
    
})

function checkName() {
    let name = document.getElementById('name').value;
    let warning = document.getElementById('warning-message');
    if  (name === '') {
        warning.innerText = 'You have not entered a name.';
        checkName();
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
    // console.log(questionNumDisplay);
}

/**
 * Displays the possible answers to the question picked in pickQuestion function
 */
function setAnswers(num) {
    displayAnswers[0].innerText = questions[num].answers[0];
    displayAnswers[1].innerText = questions[num].answers[1];
    displayAnswers[2].innerText = questions[num].answers[2];
    checkAnswer(num);
}

function checkAnswer(questionNum) {
    let correctAns = questions[questionNum].correctAnswer;
    let boxPicked = answerBoxPicked + 1;
    let answerPicked = parseInt(document.getElementById(`answer${boxPicked}`).innerText);;
    
    if (correctAns === answerPicked) {
        document.getElementById('question-response').innerText = "Correct answer. Well done.";
        document.getElementById(`answer${boxPicked}`).style.backgroundColor = 'green';
        currentScore++;
        document.getElementById('correct-answers').innerText = currentScore;
    } else {
        document.getElementById('question-response').innerText = "Incorrect answer. Better luck next time.";
        document.getElementById(`answer${boxPicked}`).style.backgroundColor = 'red';
    }
    nextQuestion();
}

function nextQuestion() {
    pickQuestion();
    document.getElementById('answer1').style.backgroundColor = 'plum';
    document.getElementById('answer2').style.backgroundColor = 'plum';
    document.getElementById('answer3').style.backgroundColor = 'plum';
    document.getElementById('question-response').innerText = "";
    
}

function endQuiz() {
    document.getElementById('nextQ').disabled = true;
    
}

function showResult() {

}

function resetGame() {

}