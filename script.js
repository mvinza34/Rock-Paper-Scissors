// the CPU chooses whether to use rock, paper, or scissors
function getComputerChoice() {
    // picks a random number between 0 and 2
    let comChoice = Math.floor(Math.random() * 3);

    if (comChoice === 1) {
        return "Rock";
    }
    else if (comChoice === 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

console.log(getComputerChoice());