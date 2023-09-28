var startSection = document.getElementById("start-screen")
var timerElement = document.getElementById("timer")
var startButton = document.getElementById("start-button")
var currentQuestion = 0
var questionsEl = document.getElementById("questions")
var timeLeft = 75
var timeInterval = null
var gameOver = document.getElementById("enter-initials-form")

var myQuestions = [{
    questionText: "How many boroughs are in New York City?",
    choices: ["4", "5", "6", "3"],
    correctAnswer: "5"
}, {
    questionText: "What is the name of the largest urban park in Manhattan?",
    choices: ["Bryant Park", "Madison Square Park", "Central Park", "Washington Square Park"],
    correctAnswer: "Central Park"
}, {
    questionText: "In which part of Manhattan can you find Times Square?",
    choices: ["Soho", "Midtown", "Lower East Side", "Financial District"],
    correctAnswer: "Midtown"
}, {
    questionText: "What is the nickname of New York City?",
    choices: ["The City of Lights", "The Windy City", "Sin City", "The Big Apple"],
    correctAnswer: "The Big Apple"
}, {
    questionText: "Which street or avenue is home to the New York Stock Exchange?",
    choices: ["Canal Street", "Wall Street", "Fifth Avenue", "Park Avenue"],
    correctAnswer: "Wall Street"
}]

function renderQuestion () {
  questionsEl.innerHTML= ""
var questionText = document.createElement("h2")
questionText.textContent= myQuestions[currentQuestion].questionText
questionsEl.append (questionText)

for (var i=0; i < myQuestions[currentQuestion].choices.length; i++) {
var choiceButton = document.createElement("button")
choiceButton.textContent= myQuestions[currentQuestion].choices[i]
choiceButton.style.display= "block"
questionsEl.append (choiceButton)
}
}

function handleAnswerClick (event) {
  if (event.target.tagName !== "BUTTON"){
    return
  } 
if (event.target.textContent === myQuestions[currentQuestion].correctAnswer) {
  console.log("correct")
} else {
  console.log("false")
  timeLeft -= 20
} 
currentQuestion++
if (currentQuestion >= myQuestions.length) {
  endQuiz ()
}
renderQuestion () 
}

function endQuiz () {
  console.log("Game over.")
  clearInterval(timeInterval)
  gameOver.style.display= "block"
 
}

document.querySelector('.submitInitials').addEventListener('click', function (){
  var scores = JSON.parse(localStorage.getItem('scores'))||[]
  var scoreObject = {
    score: timeLeft,
    initials: document.querySelector('.initials').value
  }
scores.push(scoreObject)
localStorage.setItem('scores',JSON.stringify(scores))
window.location.reload()
})

document.querySelector('#view-highscores').addEventListener('click',function(){
  document.querySelector('#score-board').style.display= 'block'
  document.querySelector('#start-screen').style.display= 'none'
  var scores = JSON.parse(localStorage.getItem('scores'))||[]
  for (var i=0; i < scores.length; i++) {
    var score = document.createElement('p')
    score.innerText= scores[i].initials+' '+scores[i].score
    document.querySelector('#score-board').appendChild(score)
  }
})

//countdown timer 
function startQuiz() {
  startSection.style.display= "none"
  countdown()
  renderQuestion()
}
function countdown() {
  
  timeInterval = setInterval(function () {
    if (timeLeft >= 1) {
      timerElement.textContent = 'Your Score: ' + timeLeft;
      timeLeft--;
    } else {
      timerElement.textContent = '0';
      clearInterval(timeInterval);
      endQuiz();
    }
  }, 1000);
  }

  startButton.addEventListener("click", startQuiz);
  questionsEl.addEventListener("click", handleAnswerClick)
