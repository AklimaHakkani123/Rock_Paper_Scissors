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
function getHumanChoice() {
  const choice = prompt("choice");
  return choice.toLowerCase();
}
console.log(getHumanChoice());
