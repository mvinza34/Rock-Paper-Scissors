// Keeps track of both the player and computer scores
let humanScore = 0;
let computerScore = 0;

// Retrieves the computer's input on whether rock, paper, or scissors was chosen
function getComputerChoice() {
    // picks a random number between 0 and 2
    let comNum = Math.floor(Math.random() * 3);

    let comChoice;

    if (comNum === 1) {
        comChoice = "rock";
        console.log(`The computer chose ${comChoice}.`);
        return comChoice;
    }
    else if (comNum === 2) {
        comChoice = "paper";
        console.log(`The computer chose ${comChoice}.`);
        return comChoice;   
    }
    else {
        comChoice = "scissors";
        console.log(`The computer chose ${comChoice}.`);
        return comChoice;
    }
}

// Retrieves the player's input on whether rock, paper, or scissors was chosen
function getHumanChoice() {
    let choice = prompt("Choose either rock, paper, or scissors: ");

    if (choice === "rock") {
        console.log(`You chose ${choice}.`);
    }
    else if (choice === "paper") {
        console.log(`You chose ${choice}.`);
    }
    else if (choice === "scissors") {
        console.log(`You chose ${choice}.`);
    }
    else {
        console.log("That's not a valid choice.");
    }

    return choice;
}
