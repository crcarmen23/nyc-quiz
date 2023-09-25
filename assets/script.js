
var timerElement = document.querySelector(".timer")


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




myQuestions[0].questionText
myQuestions[0].choices[0]
myQuestions[0].correctAnswer

//on click 
myQuestions[1]


function countdown() {
    var timeLeft = 60;
  
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerElement.textContent = timeLeft;
      timeLeft--;
    } else if (timeLeft === 1) {
      timerElement.textContent = timeLeft;
      timeLeft--;
    } else {
      timerElement.textContent = '0';
      clearInterval(timeInterval);
      gameOver();
    }
  }, 1000);
  }
  
  function gameOver (){
  wordBlank.textContent = "GAME OVER"
  }
  
  countdown();