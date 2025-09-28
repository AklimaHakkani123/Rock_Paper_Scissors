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
let humanScore = 0;
let computerScore = 0;

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

function playGame() {
  humanScore = 0;
  computerScore = 0;
  for (i = 1; i <= 5; i++) {}
}
console.log("hima");
