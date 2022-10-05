/* Rock Paper Scissors
Game is played in the browsers console against the computer.
When user gives string input of either "rock", "paper" or "scissors",
then game compares user input to computers choice,
then game logs result to console.*/

//Function that randomly returns a computers choice

let playerScore = 0;
let computerScore = 0;

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
        console.log("It\'s a tie!");
        return;
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
        return;
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You win! Rock beats Scissors");
        playerScore++;
        return;
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        console.log("You win! Paper beats Rock");
        playerScore++;
        return;
    } else if (playerSelection === "paper" && computerSelection === "paper"){
        console.log("It\'s a tie!");
        return;
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        console.log("You lose! Scissors beat Paper");
        computerScore++;
        return;
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
        return;
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You win! Scissors beat Paper");
        playerScore++;
        return;
    } else if (playerSelection === "scissors" && computerSelection === "scissors"){
        console.log("It\'s a tie!");
        return;
    } else return "Enter only one of the following words: rock, paper, scissors!";    
}
//Function to play a 5 round game

function game(){

    for (let i = 1; i < 6; i++){
        const playerSelectionRaw = window.prompt("Rock, paper or scissors?");
        const playerSelection = playerSelectionRaw.toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(`Round Nr.${i}:`);
        playRound(playerSelection, computerSelection);
    }

    console.log(`Your score is: ${playerScore}, computers score is: ${computerScore}.`);
    
    if(playerScore > computerScore){
        console.log("You win!")
    } else if (playerScore < computerScore){
        console.log("You lose!")
    } else if (playerScore === computerScore){
        console.log("It\'s a tie!")
    } else return;
}




game();