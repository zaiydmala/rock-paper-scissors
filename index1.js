game();
function game() {
    var choices = ["rock", "paper", "scissors"];
    var playerScore = 0;
    var computerScore = 0;
    console.log(`${playerScore} - ${computerScore}`);
    for(i = 0; i < 5; i++) {
        playRound();
        function playRound() {
            var playerChoice = prompt("R P S?");
            var computerChoice = getComputerChoice();
            function getComputerChoice() {
                let computerChoice = choices[Math.floor(Math.random()*choices.length)];
                return computerChoice;
            }
            console.log(`${playerChoice} - ${computerChoice}`);

        }

        
    }
}

