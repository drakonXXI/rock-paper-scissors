"use strict";
  let choices;
  let choice;
function getComputerChoice() {
  choices = ["rock", "paper", "scissors"];
  return choice = choices[Math.floor(Math.random()*choices.length)];
}
