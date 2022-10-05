/* Rock Paper Scissors
Game is played in the browsers console against the computer.
When user gives string input of either "rock", "paper" or "scissors",
then game compares user input to computers choice,
then game logs result to console.*/

//Function that randomly returns a computers choice

function getComputerChoice(){
    let selector = Math.floor(Math.random() * 3) + 1; //makes 1 or 2 or 3 randomly
    if (selector === 1){
        return "rock";
    } else if (selector === 2){
        return "paper";
    } else if (selector === 3){
        return "scissors";
    } else return;
}

//Function that plays a single round of rock paper scissors

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock"){
        return "It\'s a tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        return "You lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "paper"){
        return "It\'s a tie!";
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "You lose! Scissors beat Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "You lose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You win! Scissors beat Paper";
    } else if (playerSelection === "scissors" && computerSelection === "scissors"){
        return "It\'s a tie!";
    } else return;    
}
const playerSelectionRaw = window.prompt("Rock, paper or scissors?");
const playerSelection = playerSelectionRaw.toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));