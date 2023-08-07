var humanChoice;
var computerChoice;
var humanScore = 1;
var computerScore = 1;
var humanScoreSpan;
var computerScoreSpan;
var roundResults;
var choices;

choices = document.querySelectorAll("button");
humanScoreSpan = document.querySelector("#humanScoreSpan");
computerScoreSpan = document.querySelector("#computerScoreSpan");
roundResults = document.querySelector("#roundResults");



function randomzier() {
  var randomChoice = Math.floor(Math.random() * 3) + 1;

  if (randomChoice === 1) {
    return (randomChoice = "rock");
  }
  if (randomChoice === 2) {
    return (randomChoice = "paper");
  } else {
    return (randomChoice = "scissors");
  }
};


choices.forEach(function (button) {
  button.addEventListener("click", () => {
    humanChoice = button.id;
    computerChoice = randomzier();
    if( humanScore <= 5 && computerScore <= 5){
      game();
    };
  });
});


function letsPlay(humanChoice, comChoice) {
  if (humanChoice === comChoice) {
    roundResults.textContent = "It is a draw";
  }
  if (humanChoice === "rock" && comChoice === "paper") {
    computerScoreSpan.textContent = `${computerScore++}`;
    roundResults.textContent = "Computer Won. Paper beats Rock";
  }
  if (humanChoice === "paper" && comChoice === "rock") {
    humanScoreSpan.textContent = `${humanScore++}`;
    roundResults.textContent = "Human Won. Paper beats Rock";
  }
  if (humanChoice === "scissors" && comChoice === "rock") {
    computerScoreSpan.textContent = `${computerScore++}`;
    roundResults.textContent = "Computer Won. Rock beats Scissors";
  }
  if (humanChoice === "rock" && comChoice === "scissors") {
    humanScoreSpan.textContent = `${humanScore++}`;;
    roundResults.textContent = "Human Won. Rock beats Scissors";
  }
  if (humanChoice === "paper" && comChoice === "scissors") {
    computerScoreSpan.textContent = `${computerScore++}`;
    roundResults.textContent = "Computer Won. Scissors beats Paper";
  }
  if (humanChoice === "scissors" && comChoice === "paper") {
    humanScoreSpan.textContent = `${humanScore++}`;;
    roundResults.textContent = "Human Won. Scissors beats Paper";
  }
};

function playRound (){
return letsPlay(humanChoice, computerChoice);
};

function game() {
    playRound();

};
