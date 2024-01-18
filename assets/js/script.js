


const displayAnswers = document.getElementsByClassName('answers');
const questionArea = document.getElementsByClassName('question-area')[0];
const welcomeArea = document.getElementsByClassName('welcome-area')[0];

let numArray = [];
let questionNumDisplay = 0;
let currentScore = 0;
let questionNum = 0;
let num;

    

document.addEventListener('DOMContentLoaded', function() {

    // questionArea.style.display = 'none';
    // document.getElementById('start').addEventListener('click', pickQuestion);
    document.getElementById('nextQ').addEventListener('click', nextQuestion);
    welcomeArea.style.display = 'none';
 
})

// function checkName() {
//     let name = document.getElementById('name').value;
//     let warning = document.getElementById('warning-message');
//     if  (name === '') {
//         warning.innerText = 'You have not entered a name.';
//         checkName();
//     } else {
//         // document.getElementById('name').innerText = name;
//         // document.getElementById('question-num').innerText = 1;
//         questionArea.style.display = 'block';
//         welcomeArea.style.display = 'none';
//         pickQuestion();
//     }
// }

/**
 * Picks a random question from the questions array and checks to see if it was asked previously
 */
function pickQuestion() {
    questionArea.style.display = 'block';
    welcomeArea.style.display = 'none';
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
    // console.log(questionNumDisplay);
}

/**
 * Displays the possible answers to the question picked in pickQuestion function
 */
function setAnswers(num) {
    displayAnswers[0].innerText = questions[num].answers[0];
    displayAnswers[1].innerText = questions[num].answers[1];
    displayAnswers[2].innerText = questions[num].answers[2];
    // checkAnswerClicked(num);
    document.addEventListener('click', checkAnswerClicked);
}

/**
 * Checks which answer the user clicked on and sends it to the checkAnswer function.
 */
function checkAnswerClicked(e) {
    let questionNum = num;
    let answerBox1 = document.getElementById('answer1');
    let answerBox2 = document.getElementById('answer2');
    let answerBox3 = document.getElementById('answer3');
    let answerClicked = parseInt(e.target.innerText);
    let boxNum = e.target.dataset;
    console.log(boxNum);
    console.log(answerClicked);
    
    // answerBox1.addEventListener('click', function(){
    //     answerClicked = parseInt(answerBox1.innerText);
    //     boxNum = 1; 
    // })

    // answerBox2.addEventListener('click', function(){
    //     answerClicked = parseInt(answerBox2.innerText);
    //     boxNum = 2;
    // })

    // answerBox3.addEventListener('click', function(){
    //     answerClicked = parseInt(answerBox3.innerText);
    //     boxNum = 3;
    // })   
    checkAnswer(questionNum, answerClicked, boxNum);
    
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
    
    document.getElementById('answer1').style.backgroundColor = 'plum';
    document.getElementById('answer2').style.backgroundColor = 'plum';
    document.getElementById('answer3').style.backgroundColor = 'plum';
    document.getElementById('question-response').innerText = "";
    pickQuestion();
}

function endQuiz() {
    document.getElementById('nextQ').disabled = true;
    
}

function showResult() {

}

function resetGame() {

}