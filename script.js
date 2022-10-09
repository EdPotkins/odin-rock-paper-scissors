//Rock Paper Scissors
//Variables to hold scores
let playerScore = 0;
let computerScore = 0;

//Variables to hold DOM elements
const buttons = document.querySelectorAll('button');
const container = document.querySelector('.container');
const score = document.querySelector('.score');
const announcement = document.querySelector('.announcement');

//Function which runs game on mouse click and gives output
buttons.forEach((button) => {
    button.addEventListener('click', function (e){
        playRound(e.target.id, getComputerChoice());
        
        score.textContent = `Score:\n
        ${playerScore} - Player vs Computer - ${computerScore}`; //Score counter div
        
        if (playerScore === 5){
            announcement.textContent = "YOU WIN!"; //Gameover conditions
            buttons.forEach((button) => {button.disabled = true});
            container.textContent = "";
        } else if (computerScore === 5){
            announcement.textContent = "YOU LOSE!";
            buttons.forEach((button) => {button.disabled = true});
            container.textContent = "";
        } return;
    });
});

//Calculate computers choice - rock or paper or scissors
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
//Function that plays a single round, contains all of games logic
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock"){
        console.log("It\'s a tie!");
        container.textContent = "It\'s a tie!";
        return;
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        console.log("You lose! Paper beats Rock");
        container.textContent = "You lose! Paper beats Rock"; 
        computerScore++;
        return;
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You win! Rock beats Scissors");
        container.textContent = "You win! Rock beats Scissors";
        playerScore++;
        return;
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        console.log("You win! Paper beats Rock");
        container.textContent = "You win! Paper beats Rock";
        playerScore++;
        return;
    } else if (playerSelection === "paper" && computerSelection === "paper"){
        console.log("It\'s a tie!");
        container.textContent = "It\'s a tie!";
        return;
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        console.log("You lose! Scissors beat Paper");
        container.textContent = "You lose! Scissors beat Paper";
        computerScore++;
        return;
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        console.log("You lose! Rock beats Scissors");
        container.textContent = "You lose! Rock beats Scissors";
        computerScore++;
        return;
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You win! Scissors beat Paper");
        container.textContent = "You win! Scissors beat Paper";
        playerScore++;
        return;
    } else if (playerSelection === "scissors" && computerSelection === "scissors"){
        console.log("It\'s a tie!");
        container.textContent = "It\'s a tie!";
        return;
    } return;    
}
