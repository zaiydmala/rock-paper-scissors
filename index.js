game();
function game() { 
    const start = document.querySelector('.start');
start.addEventListener('click', (e) => {
    const playerContainer = document.querySelector('.player-container');
    playerContainer.classList.remove('hide');
});

let playerScore = 0;
let computerScore = 0;

let selected = document.querySelectorAll('#option');

selected.forEach((selection) => { 
    selection.addEventListener('click', selectedOption);
    selection.addEventListener('click', playRound);
});
function selectedOption() {
    const selection = this.className;
    selected = selection;
}

function playRound() {
    let options = ['rock', 'paper', 'scissors'];
    const computerChoice = getComputerChoice();
    function getComputerChoice() { return options[Math.floor(Math.random()*options.length)]; }
    roundDecision();
    
    function roundDecision() {
        console.log(`${selected} - ${computerChoice}`);
        if( (selected === 'rock' && computerChoice === 'scissors') ||
            (selected === "paper" && computerChoice === "rock") ||
            (selected === "scissors" && computerChoice === "paper") ) {
            playerScore++;
            const currentPlayerScore = document.querySelector('.player-score').textContent = `${playerScore}`;
        }//win conditions and output
        else if( (selected === 'rock' && computerChoice === 'paper') ||
            (selected === "paper" && computerChoice === "scissors") ||
            (selected === "scissors" && computerChoice === "rock") ) {
            computerScore++;
            const currentComputerScore = document.querySelector('.computer-score').textContent = `${computerScore}`;
        }//lose conditions and output
    }   
    
}


}




// game(); //the game is coded entirely in this function
// function game() {
//     const choices = ["rock", "paper", "scissors"];    //options for the player and computer to choose from
//     let playerScore = 0;
//     let computerScore = 0;
//     console.log(`SCOREBOARD ${playerScore} | ${computerScore}`);    //displaying the score before round 1
//     /* Below if a loop that runs 5times as the game will have 5 rounds */
//     for(i = 0; i < 5; i++) {
//         playRound();
//         function playRound() {
//             const playerChoice = prompt("Choose Rock, paper or scissors!");   //Asking the user to choose            
//             const computerChoice = getComputerChoice();   //invokes the function that decide the computer's choice
//             function getComputerChoice() {
//                 let computerChoice = choices[Math.floor(Math.random()*choices.length)];
//                 return computerChoice;
//             }   //Get a random choice of the computer and returns it and stores in the variable computerChoice
            
//             /* Below are the win, lose and draw conditions of each round */
//             if(playerChoice.toLowerCase() === computerChoice) { console.log(`It is a draw! because ${playerChoice} is same as ${computerChoice}`); }
//             //Draw conditions
//             else if(playerChoice.toLowerCase() === "rock" && computerChoice === "paper" ||
//             playerChoice.toLowerCase() === "paper" && computerChoice === "scissors" ||
//             playerChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
//                 console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
//                 computerScore++;
//             }   //declare losing conditions and incrementing the computer's score
//             else if(playerChoice.toLowerCase() === "rock" && computerChoice === "scissors" ||
//             playerChoice.toLowerCase() === "paper" && computerChoice === "rock" ||
//             playerChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
//                 console.log(`You win! ${playerChoice} beats ${computerChoice}`);
//                 playerScore++;
//             }   //declare win conditions and incrementing the player's score
//             console.log(`${playerScore} | ${computerScore}`);   //displaying score after every round
//         } 
//     }
// }

