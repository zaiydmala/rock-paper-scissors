choices = ["rock","paper","scissors"];

function getComputerChoice() {
    var computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
}

function playRound(playerChoice, computerChoice) {

    if(playerChoice.toLowerCase() === computerChoice.toLowerCase()) { console.log("It is a draw!")}

    else if(playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper" ||
            playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors" ||
            playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock" ) {
                console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
            }
    
    
}
var playerChoice = prompt("Choose Rock, Paper or Scissors!");
var computerChoice = getComputerChoice();
console.log(playRound(playerChoice, computerChoice));



