//  problem Rock,paper,scissors(computer choice)

// function getComputerChoice() {
//   const randomNumber = Math.random();

//   if (randomNumber < 1 / 3) {
//     return "rock";
//   } else if (randomNumber < 2 / 3) {
//     return "paper";
//   } else {
//     return "scissors";
//   }
// }
// console.log(getComputerChoice());

// problem human Choice
// function getHumanChoice() {
//   const choice = prompt("choice");
//   return choice.toLowerCase();
// }
// console.log(getHumanChoice());

//players score variables
// let humanScore = 0;
// let computerScore = 0;

//logic to play a single round
// function playRound(humanChoice, computerChoice) {
//   computerChoice = computerChoice.toLowerCase();
//   humanChoice = humanChoice.toLowerCase();
//   if (humanChoice === computerChoice) {
//     console.log("it's a tie, both choice " + humanChoice);
//     return "tie";
//   } else if (
//     (humanChoice === "rock" && computerChoice === "scissors") ||
//     (humanChoice === "paper" && computerChoice === "rock") ||
//     (humanChoice === "scissors" && computerChoice === "paper")
//   ) {
//     console.log("You win!  " + humanChoice + "  beats  " + computerChoice);

//     humanScore++;
//     return "human";
//   } else {
//     console.log("You lose!" + computerChoice + "beats" + humanChoice);
//     computerScore++;
//     return "computer";
//   }
// }
// Write the logic to play the entire game

// function playGame() {
//   humanScore = 0;
//   computerScore = 0;
//   for (i = 1; i <= 5; i++) {}
// }
// console.log("hima");

// adding uiu n rock, paper, scissors

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");

let playerScore = 0;
let computerScore = 0;
rockBtn.addEventListener("click", () => {
  playRound("rock");
});

paperBtn.addEventListener("click", () => {
  playRound("paper");
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors");
});

function playRound(playerSelection) {
  const choices = ["rock", "paper", "scissors"];
  const computerSelection = choices[Math.floor(Math.random() * 3)];
  let roundResult = "";

  if (playerSelection === computerSelection) {
    roundResult = `tie both choice ${playerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    roundResult = `you win ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else {
    roundResult = `you lose ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }

  resultDiv.textContent = roundResult;
  scoreDiv.textContent = `players: ${playerScore} - computers:${computerScore}`;

  if (playerScore === 5) {
    resultDiv.textContent = "congratulations, player won the game";
    resetGame();
  } else if (computerScore === 5) {
    resultDiv.textContent = "congratulations, computer won the game";
    resetGame();
  }
}
function resetGame() {
  computerScore = 0;
  playerScore = 0;
}
