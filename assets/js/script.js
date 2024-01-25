// Global variables to be used in multiple functions
const displayAnswers = document.getElementsByClassName('answers');
const questionArea = document.getElementsByClassName('question-area')[0];
const welcomeArea = document.getElementsByClassName('welcome-area')[0];
const resultsArea = document.getElementsByClassName('results-area')[0];
const start = document.getElementById('start');
let numArray = [];
let questionNumDisplay = 0;
let currentScore = 0;
let questions = [...easyQuestions];
let num = 0;

/**
 * Runs when the quiz is opened/loaded and displays the welcome area to the user
 */
document.addEventListener('DOMContentLoaded', function() {
    questionArea.style.display = 'none';
    resultsArea.style.display = 'none';
    document.getElementById('easy').style.backgroundColor = 'rgb(19, 251, 19)';
    //checks to see what difficulty level the user chose.
    document.getElementById('hard').addEventListener('click', function() {
        questions = [...hardQuestions];
        document.getElementById('hard').style.backgroundColor = 'rgb(19, 251, 19)';
        document.getElementById('easy').style.backgroundColor = 'rgb(53, 124, 216)';
    });
    document.getElementById('easy').addEventListener('click', function() {
        questions = [...easyQuestions];
        document.getElementById('easy').style.backgroundColor = 'rgb(19, 251, 19)';
        document.getElementById('hard').style.backgroundColor = 'rgb(53, 124, 216)';
    });
    //Runs the checkName function when the user clicks Start.
    start.addEventListener('click', checkName);
    //Runs the nextQuestion function when the user clicks Next Question.
    document.getElementById('nextQ').addEventListener('click', nextQuestion);
    //Runs the resetGame function when the user clicks Play Again.
    document.getElementById('playAgain').addEventListener('click', resetGame);
    //Disables the Results button until the quiz is finished.
    document.getElementById('results').disabled = true;   
});

/**
 * Checks if the user entered their name and then displays their name in the Question area. 
 * The welcome area is hidden and the question area is displayed.
 * If they haven't entered their name a warning message is displayed and the quiz returns to 
 * waiting for the Start button to be clicked.
 */
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
 * Picks a random question from the questions array and checks to see if it was asked previously.
 * The question picked is displayed on the screen and the setAnswers function is called.
 */
function pickQuestion() {
     // Reset the correctAnswer property of the previous question
    //  if (numArray.length > 0) {
    //     let prevQuestionNum = numArray[numArray.length - 1];
    //     questions[prevQuestionNum].correctAnswer = null;
    // }

    // generate random number between 0 and 7
    num = Math.floor(Math.random() * 8);
    
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
 * Displays the possible answers to the question picked in pickQuestion function.
 * The question picked was sent from the pickQuestion function.
 */
function setAnswers(num) {
    displayAnswers[0].innerText = questions[num].answers[0];
    displayAnswers[1].innerText = questions[num].answers[1];
    displayAnswers[2].innerText = questions[num].answers[2];
    // checkAnswerClicked(num);
}

/**
 * Checks which answer the user clicked on and sends it to the checkAnswer function.
 */
function checkAnswerClicked(answerBoxNum) {
    // let answerBoxes = document.getElementsByClassName('answers');

    // for (let i = 0; i < 3; i++) {
    //     answerBoxes[i].addEventListener('click', function() {
            let answerClicked = questions[num].answers[answerBoxNum - 1];
            console.log(answerClicked);
            checkAnswer(num, answerClicked, answerBoxNum);
    //     });
    // }     
}

/**
 * Gets the correct answer to the question picked in the pickQuestion function and compares
 * against the answer the user picked. If it's correct the answer box turns green otherwise it
 * turns red. A message is displayed to inform the user if they were correct.
 * @param {integer} questionNumber The question number that was picked randomly in the pickQuestion function.
 * @param {integer} answerPicked The value displayed in the answer box picked by the user.
 * @param {integer} answerBoxNum The number of the answer box picked.
 */
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

/**
 * Calls the pickQuestion function to display a new question.
 */
function nextQuestion() {
        pickQuestion();
        document.getElementById('answer1').style.backgroundColor = 'plum';
        document.getElementById('answer2').style.backgroundColor = 'plum';
        document.getElementById('answer3').style.backgroundColor = 'plum';
        document.getElementById('question-response').innerText = "";   
}

/**
 * Runs when the user has answered the last question and listens for the Results button to be clicked.
 * The Next Question button is disabled and the Results button is enabled.
 */
function endQuiz() {
    document.getElementById('nextQ').disabled = true;
    document.getElementById('results').disabled = false;
    //Calls the showResult function when the Results button is clicked.
    document.getElementById('results').addEventListener('click', showResult);    
}

/**
 * Displays the results area and hides the question area.
 * Checks to see what score the user got and displays a message informing of it
 * and a comment linked to their score.
 */
function showResult() {
    questionArea.style.display = 'none';
    resultsArea.style.display = 'block';
    let resultsMessage = document.getElementById('results-message');
    let userName = document.getElementById('name').value;
    if (currentScore < 3) {
        resultsMessage.innerText = `Hard luck ${userName}. You scored ${currentScore} out of 5. 
        You are in the relegation zone! Why not try again and see can you move up the table.`;
    } else if (currentScore === 3) {
        resultsMessage.innerText = `Well played ${userName}. You scored ${currentScore} out of 5. 
        That was a mid-table performance! Why not try again and see can you get into the Champions League
        places.`;
    } else if (currentScore === 4) {
        resultsMessage.innerText = `Well done ${userName}. You scored ${currentScore} out of 5. 
        You are in the Champions League places!! Why not try again and see can you win the League.`;
    } else {
        resultsMessage.innerText = `Congratulations ${userName}. You scored ${currentScore} out of 5. 
        You won the Premier League!!! Why not try again and see can you do it again.`;
    }
    //Calls the resetGame function when the Home button is clicked.
    document.getElementById('home-button').addEventListener('click', resetGame);
}

/**
 * Resets the global variables to zero/empty and rebuilds the questions array.
 * Resets the question area back to it's original state.
 * Displays the welcome area and hides the results area and the question area.
 */
function resetGame() {
    numArray = [];
    questionNumDisplay = 0;
    currentScore = 0;
    questions = [...easyQuestions]; //rebuild questions array
    document.getElementById('answer1').style.backgroundColor = 'plum';
    document.getElementById('answer2').style.backgroundColor = 'plum';
    document.getElementById('answer3').style.backgroundColor = 'plum';
    document.getElementById('question-response').innerText = "";
    document.getElementById('correct-answers').innerText = 0;
    document.getElementById('nextQ').disabled = false;
    document.getElementById('results').disabled = true;  
    questionArea.style.display = 'none';
    resultsArea.style.display = 'none';
    welcomeArea.style.display = 'block';  
}