choices = ["rock","paper","scissors"];

function getComputerChoice() {
    var computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;
}

console.log(getComputerChoice());