# Fantasy Football Quiz

## Introduction

The Fantasy Football Quiz is for people who play the Fantasy Premier League Fantasy Football game. There are currently over 10 million players worldwide. The questions in the quiz are regarding what players get points for in the Fantasy Football game.

![Am I Responsive view of website](documentation/testing/am-i-responsive.png)

## Table of Contents

* [User Stories](#user-stories)
* [Wireframes](#wireframes)
* [Design](#design)
* [Features](#features)
* [Responsiveness](#responsiveness)
* [Testing](#testing)
* [Deployment](#deployment)
* [Credits](#credits)

## User Stories

* As a user I want to test my knowledge about the Fantasy Premier League Fantasy Football game.
* As a user I want to be able to enter my name before I start the quiz.
* As a user I want to be able to choose an answer from a selection of possible choices.
* As a user I want to know if I got the question correct or incorrect.
* As a user I want to how many questions I got correct as I go through the questions.
* As a user I want to know my total score at the end of the game.
* As a user I want to be told how well I did and if I can improve.

## Wireframes

I used [Balsamiq](https://balsamiq.com/) to create wireframes for my website to plan the layout of the pages. I found this very useful when I started writing the code for the website.

* Mobile View

  * [Welcome Area](documentation/wireframes/mobile-welcome-area.png)
  * [Question Area](documentation/wireframes/mobile-question-area.png)
  * [Results Area](documentation/wireframes/mobile-result-area.png)

* Tablet View

  * [Welcome Area](documentation/wireframes/tablet-welcome-area.png)
  * [Question Area](documentation/wireframes/tablet-question-area.png)
  * [Results Area](documentation/wireframes/tablet-result-area.png)

* Laptop/Desktop View

  * [Welcome Area](documentation/wireframes/desktop-welcome-area.png)
  * [Question Area](documentation/wireframes/desktop-question-area.png)
  * [Results Area](documentation/wireframes/desktop-result-area.png)

[Back to Top](#fantasy-football-quiz)

## Design

### Color Scheme

* I chose rgb(164, 152, 237) for the background color because the color people associate most with Fantasy Football is purple.
* I google the official colors of the Fantasy Football website but the purple they use (rgb(56,0,60)) was too dark to see the features on my quiz. They use it for banners on the website.
* They also use a light blue color rgb(4,245,255) but this was too bright for my quiz. I used a similar light blue (aqua) for the message background in the Results area.
* I used rgb(53, 124, 216) and rgb(19, 251, 19) for the "Easy" and "Hard" buttons to make them stand out on the screen and they look good against the background color.
* I chose green and red for correct and incorrect answers as these are known worldwide as positive and negative respectively.

### Font

* I decided to use the "Noto Sans" font family for my website.
* I googled the top ten font families to use on websites and I thought "Noto Sans" was the a good font for a quiz. There is not much text on the screen at any one time so I wanted it to stand out more to make it look more like a game.
* I imported them from [Google Fonts](https://fonts.google.com/)

[Back to Top](#fantasy-football-quiz)

## Features

### Welcome Area

* The Welcome Area has a message at the top to welcome the user to the quiz.
* The user is asked to enter their name in the box underneath and chose a level of difficulty, easy or hard.
* The "Easy" button is initially selected and the questions are set to the easy questions when the quiz is loaded.
* Next the user must click the "Start" button to start the quiz. This will hide the Welcome Area and display the Question Area.

![Welcome Area in mobile view](documentation/screenshots/mobile-welcome-area.png)

* If the user clicks "Start" without entering a name, a message will appear above the difficulty level buttons to inform them of this.
* The "Start" button will not work until they have entered a name.

![Welcome Area with no username entered](documentation/screenshots/mobile-no-name-entered.png)


### Question Area

* When the Question Area is loaded/displayed the user's name is displayed at the top and their current score.
* When the user get a question right their score increase by 1.
* The question number is displayed underneath and the number increases by 1 every time the user clicks on the "Next Question" button.
* Below this is the current question. This also changes when the user clicks on the "Next Question" button.
* Next is the three possible answers to the current question. These also change for each question.
* The "Next Question" button allows the user to move to the next question. 
* The "Play Again" button will work at anytime if user wishes to start the quiz again.
* The "Results" button is disabled until the user answers all the questions. 

![Question Area in mobile view](documentation/screenshots/mobile-question-area.png)

* When the user clicks on the correct answer, the answer they clicked on turns green.
* A message is displayed below the answers to inform them of this.
* When the user clicks on the "Next Question" button, this message will disappear.

![Correct answer selected](documentation/screenshots/mobile-correct-answer.png)

* When the user clicks on an incorrect answer, the answer they clicked on turns red.
* A message is displayed below the answers to inform them of this.

![Incorrect answer selected](documentation/screenshots/mobile-incorrect-answer.png)

### Results Area

* When the user answer the last question, the "Next Question" button is disabled and the "Results" button is enabled.

![Final Question View](documentation/screenshots/mobile-final-question.png)

* When the "Results button is clicked by the user, the Question Area is hidden and the Results Area is displayed.
* A message is displayed with the user's name included. 
* It also includes the user's final score and a sentence about their score.
* The sentence is different, depending on what their final score was.
* The message also includes a sentence to encourage the user to play again.
* Below the message is the "Home" button.
* When the user clicks on the "Home" button, the Results Area is hidden and the Welcome Area is displayed.

![Results Area in mobile view](documentation/screenshots/mobile-result-area.png)

[Back to Top](#fantasy-football-quiz)

## Responsiveness

* The quiz was tested on mobile phone, tablet and desktop size screens and no issues were identified.
* In the Features section you can see how it looks on mobile phone screen sizes.
* On tablets and desktop screens sizes the border around the Welcome Area and the Question Area expands to a maximum width of 600 pixels.
* The buttons in the Question Area are displayed in a column on mobile phone screens.
* The buttons in the Question Area are displayed in a row on tablets and desktop screens.

### Tablet Screen Size

![Welcome Area in tablet view](documentation/screenshots/responsiveness/tablet-level-chosen.png)

![Question Area in tablet view](documentation/screenshots/responsiveness/tablet-correct-answer.png)

![Results Area in tablet view](documentation/screenshots/responsiveness/tablet-result-area.png)

### Desktop Screen Size

![Welcome Area in desktop view](documentation/screenshots/responsiveness/desktop-level-chosen.png)

![Question Area in desktop view](documentation/screenshots/responsiveness/desktop-correct-answer.png)

[Back to Top](#fantasy-football-quiz)

## Testing

* I tested the website using Chrome, Firefox and Microsoft Edge.
* I confirmed that the website is responsive and fully functional using Chrome devtools and https://responsivedesignchecker.com/.


### Validator Testing

* HTML
  * No errors were returned when I passed the code through the official W3C validator.
  * You can view the results [here](documentation/testing/html-validation.png)

* CSS
  * No errors were returned When I passed the code through the official Jigsaw validator.
  * You can view the results [here](documentation/testing/css-validation.png)

* Javascript
  * No errors were returned When I passed the code through the official jshint validator.
  * You can view the results [here](documentation/testing/jshint-validation.png)

* Accessibility
  * The website has 100% Accessibility when I ran it through Lighthouse in devtools.

#### Desktop

![Lighthouse results from Desktop test](documentation/testing/lighthouse-desktop.png)

#### Mobile

![Lighthouse results from Desktop test](documentation/testing/lighthouse-mobile.png)

[Back to Top](#fantasy-football-quiz)

## Deployment

The site was deployed to GitHub pages. The steps to deploy are:

* In the GitHub repository, navigate to the settings tab.
* From the source section drop-down menu, select the Master Branch.
* Once the Master Branch has been selected, the page provided the link to the website.

Click [here](https://soro82.github.io/fantasy-football-quiz/) for the live link.

### Forking

Forking is a way to make a copy of the original repository on your GitHub account to view and change without affecting the original repository.

* Log in to GitHub and locate your GitHub Repository.
* At the top of the Repository(under the main navigation) locate the "Fork" button.
* Now you should have a copy of the original repository in your GitHub account.

### Cloning

* Log in to GitHub and locate the GitHub Repository.
* Under the repository name click "Clone or download".
* Click on the code button, select clone with HTTPS, SSH or GitHub CLI and copy the link shown.
* Open Git Bash.
* Change the current working directory to the location where you want the cloned directory to be made.
* Type git clone and then paste The URL copied in the step 3.
* Press Enter and your local clone will be created.

[Back to Top](#fantasy-football-quiz)

## Credits

* I used www.w3schools.com to learn how to use modals and how to create a copy of an array.
* I used Devtools and www.responsivedesignchecker.com to test the responsiveness of the website.


[Back to Top](#fantasy-football-quiz)
