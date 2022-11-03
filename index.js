function game() {
    var choices = ["rock","paper","scissors"];
    var playerScore = 0;
    var computerScore = 0;
    var score = `${playerScore} - ${computerScore}`;
    
    for(i = 0; i < 5; i++) {
        
        function playRound(playerChoice, computerChoice) {
            var playerChoice = prompt("Choose Rock, Paper or Scissors!");
            var computerChoice = getComputerChoice();
            function getComputerChoice() {
                var computerChoice = choices[Math.floor(Math.random()*choices.length)];
                return computerChoice;
            }
            if(playerChoice.toLowerCase() === computerChoice.toLowerCase()) { console.log("It is a draw!"); } //declare draw condition
        
            else if(playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper" ||
                    playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors" ||
                    playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock" ) {
                        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
                        computerScore++;
                        return computerScore;
                        
                  
                    }   //declare lose conditions and outputs
            else if(playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors" ||
                    playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock" ||
                    playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
                        console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
                        playerScore++;
                        return playerScore;
                        
                     
                    }   
              //declare win conditions and outputs
        }
        console.log(score);
        playRound();
    }
    console.log(score);   
}
game();






