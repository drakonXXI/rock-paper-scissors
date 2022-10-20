"use strict";
  let choices;
  let choice;
function getComputerChoice() {
  choices = ["rock", "paper", "scissors"];
  return choice = choices[Math.floor(Math.random()*choices.length)];
}

let playerSelection = prompt("What\'s your choice?").toLowerCase();
const computerSelection = getComputerChoice();

let playerScore = 0;
let computerScore = 0;
let scoreBoard;

function playRound(playerSelection, computerSelection) {
switch (true) {
    case (playerSelection === "rock" && computerSelection === "rock"):
    return alert("It\'s a tie");
    case (playerSelection === "rock" && computerSelection === "scissors"):
    alert("You won! Rock beats scissors");
    return playerScore++;
    case (playerSelection === "rock" && computerSelection === "paper"):
    alert("You lose! paper beats rock");
    return computerScore++;
    case (playerSelection === "paper" && computerSelection === "paper"):
    return alert("It\'s a tie");
    case (playerSelection === "paper" && computerSelection === "scissors"):
    alert("You lose! scissors beats paper");
    return computerScore++;
    case (playerSelection === "paper" && computerSelection === "rock"):
    alert("You won! paper beats rock");
    return playerScore++;
    case (playerSelection === "scissors" && computerSelection === "scissors"):
    return alert("It\'s a tie");
    case (playerSelection === "scissors" && computerSelection === "paper"):
    alert("You won! scissors beats paper");
    return playerScore++;
    case (playerSelection === "scissors" && computerSelection === "rock"):
    alert("You lose! rock beats scissors");
    return computerScore++;
    default:
    alert("I don\'t recognize this Jankenpon");
  }
}
// console.log(playRound(playerSelection, computerSelection));
function game() {
  for (let i = 0; i < 5; i++) {
     playRound(playerSelection, getComputerChoice());
     playerSelection = prompt("What\'s your choice?").toLowerCase();

  }
}
game();
 scoreBoard = `Player: ${playerScore} computerScore ${computerScore}`;

  if (playerScore > computerScore) {
    console.log(scoreBoard);
    console.log("You won the game");
  } else if (playerScore === computerScore) {
    console.log(scoreBoard);
    console.log("It\'s a tie.");
  } else {
    console.log(scoreBoard);
    console.log("You lose the game");
  }
