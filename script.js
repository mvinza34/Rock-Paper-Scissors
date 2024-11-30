// Keeps track of both the player and computer scores
let humanScore = 0;
let computerScore = 0;

// Retrieves the computer's input on whether rock, paper, or scissors was chosen
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

// Retrieves the player's input on whether rock, paper, or scissors was chosen
function getHumanChoice() {
    let choice = prompt("Choose either rock, paper, or scissors: ");

    if (choice === "Rock") {
        console.log(`You chose ${choice}.`);
    }
    else if (choice === "Paper") {
        console.log(`You chose ${choice}.`);
    }
    else if (choice === "Scissors") {
        console.log(`You chose ${choice}.`);
    }
    else {
        console.log("That's not a valid choice.");
    }

    return choice;
}

console.log(getHumanChoice());