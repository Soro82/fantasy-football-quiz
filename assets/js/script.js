
const displayAnswers = document.getElementsByClassName('answers');
const questionArea = document.getElementsByClassName('question-area')[0];
const welcomeArea = document.getElementsByClassName('welcome-area')[0];
const start = document.getElementById('start');
let numArray = [];
let questionNumDisplay = 0;
let currentScore = 0;
let questions = [...easyQuestions];



document.addEventListener('DOMContentLoaded', function() {
    questionArea.style.display = 'none';
    document.getElementById('hard').addEventListener('click', function() {
        questions = hardQuestions;
    })
    start.addEventListener('click', checkName);
    document.getElementById('nextQ').addEventListener('click', nextQuestion);
    // document.getElementById('playAgain').addEventListener('click', resetGame);
    document.getElementById('results').disabled = true;   
})

function checkName() {
    let name = document.getElementById('name').value;

    let warning = document.getElementById('warning-message');
    if  (name === '') {
        warning.innerText = 'You have not entered a name.';
        start.addEventListener('click', checkName);
    } else {
        let capName = name.charAt(0).toUpperCase() + name.slice(1);
        document.getElementById('users-name').innerText = capName;
        questionArea.style.display = 'block';
        welcomeArea.style.display = 'none';
        pickQuestion();
    }
}

/**
 * Picks a random question from the questions array and checks to see if it was asked previously
 */
function pickQuestion() {
     // Reset the correctAnswer property of the previous question
     if (numArray.length > 0) {
        let prevQuestionNum = numArray[numArray.length - 1];
        questions[prevQuestionNum].correctAnswer = null;
    }

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
    let answerBoxes = document.getElementsByClassName('answers');

    for (let i = 0; i < 3; i++) {
        answerBoxes[i].addEventListener('click', function() {
            let answerClicked = parseInt(answerBoxes[i].innerText);
            checkAnswer(questionNum, answerClicked, i + 1);
        });
    } 
    
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
    document.getElementById('results').disabled = false;    
}

function showResult() {

}

function resetGame() {
    numArray = [];
    questionNumDisplay = 0;
    currentScore = 0;
    prevQuestionNum = 0;
    questions = [...easyQuestions]; //rebuild questions array
    document.getElementById('answer1').style.backgroundColor = 'plum';
    document.getElementById('answer2').style.backgroundColor = 'plum';
    document.getElementById('answer3').style.backgroundColor = 'plum';
    document.getElementById('question-response').innerText = "";
    document.getElementById('correct-answers').innerText = 0;
    document.getElementById('nextQ').disabled = false;
    questionArea.style.display = 'none';
    welcomeArea.style.display = 'block';  
    console.log(questionNumDisplay);
    console.log(currentScore);
}