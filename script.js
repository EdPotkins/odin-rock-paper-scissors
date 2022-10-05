/* Rock Paper Scissors
Game is played in the browsers console against the computer.
When user gives string input of either "rock", "paper" or "scissors",
then game compares user input to computers choice,
then game logs result to console.*/

//Function that randomly returns a computers choice

function getComputerChoice(){
    let selector = Math.floor(Math.random() * 3) + 1; //makes 1 or 2 or 3 randomly
    if (selector === 1){
        return "Rock";
    } else if (selector === 2){
        return "Paper";
    } else if (selector === 3){
        return "Scissors";
    } else return;
}

