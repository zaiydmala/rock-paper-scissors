game();
function game() {
    var choices = ["r", "p", "s"];
    var playerScore = 0;
    var computerScore = 0;
    console.log(`SCOREBOARD ${playerScore} | ${computerScore}`);
    
    for(i = 0; i < 5; i++) {
        playRound();
        function playRound() {
            var playerChoice = prompt("R P S?");
            var computerChoice = getComputerChoice();
            function getComputerChoice() {
                let computerChoice = choices[Math.floor(Math.random()*choices.length)];
                return computerChoice;
            }//Get a random choice of the computer and returns it and stores in the variable computerChoice
            // console.log(`${playerChoice} - ${computerChoice}`);

            if(playerChoice.toLowerCase() === computerChoice.toLowerCase()) { console.log("It is a draw!"); }
            else if(playerChoice.toLowerCase() === "r" && computerChoice.toLowerCase() === "p" ||
            playerChoice.toLowerCase() === "p" && computerChoice.toLowerCase() === "s" ||
            playerChoice.toLowerCase() === "s" && computerChoice.toLowerCase() === "r") {
                console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
                computerScore++;
            }//declare losing conditions and incrementing the computer's score
            else if(playerChoice.toLowerCase() === "r" && computerChoice.toLowerCase() === "s" ||
            playerChoice.toLowerCase() === "p" && computerChoice.toLowerCase() === "r" ||
            playerChoice.toLowerCase() === "s" && computerChoice.toLowerCase() === "p") {
                console.log(`You win! ${playerChoice} beats ${computerChoice}`);
                playerScore++;
            }//decalre win conditions and incrementing the player's score

            console.log(`${playerScore} | ${computerScore}`);

        }

        
    }
}

