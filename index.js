choices = ["rock","paper","scissors"];

function getComputerChoice() {
    var computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
}

function playRound(playerChoice, computerChoice) {

    var playerScore = 0;
    var computerScore = 0;

    if(playerChoice.toLowerCase() === computerChoice.toLowerCase()) { console.log("It is a draw!")} //declare draw condition

    else if(playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper" ||
            playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors" ||
            playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock" ) {
                console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
                computerScore++;
                
            }   //declare lose conditions and outputs
    else if(playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors" ||
            playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock" ||
            playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
                console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
                playerScore++;
            
    }   //declare win conditions and outputs
    return score = `${playerScore} - ${computerScore}`;
}
let playerChoice = prompt("Choose Rock, Paper or Scissors!");
computerChoice =getComputerChoice();
playRound(playerChoice, computerChoice);
console.log(score);





