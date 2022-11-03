game(); //the game is coded entirely in this function
function game() {
    var choices = ["rock", "paper", "scissors"];    //options for the player and computer to choose from
    var playerScore = 0;
    var computerScore = 0;
    console.log(`SCOREBOARD ${playerScore} | ${computerScore}`);    //displaying the score before round 1
    /* Below if a loop that runs 5times as the game will have 5 rounds */
    for(i = 0; i < 5; i++) {
        playRound();
        function playRound() {
            var playerChoice = prompt("Choose Rock, paper or scissors!");   //Asking the user to choose
            var computerChoice = getComputerChoice();   //invokes the function that decide the computer's choice
            function getComputerChoice() {
                let computerChoice = choices[Math.floor(Math.random()*choices.length)];
                return computerChoice;
            }   //Get a random choice of the computer and returns it and stores in the variable computerChoice
            
            /* Below are the win, lose and draw conditions of each round */
            if(playerChoice.toLowerCase() === computerChoice.toLowerCase()) { console.log("It is a draw!"); }   //Draw conditions
            else if(playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "paper" ||
            playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors" ||
            playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
                console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
                computerScore++;
            }   //declare losing conditions and incrementing the computer's score
            else if(playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors" ||
            playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock" ||
            playerChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
                console.log(`You win! ${playerChoice} beats ${computerChoice}`);
                playerScore++;
            }   //declare win conditions and incrementing the player's score
            console.log(`${playerScore} | ${computerScore}`);   //displaying score after every round
        } 
    }
}

