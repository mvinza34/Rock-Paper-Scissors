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
    let choice = prompt("Choose either rock, paper, or scissors: ").toLowerCase();

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

// Plays one round of Rock, Paper, Scissors
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Both you and the computer used ${humanChoice}. It's a tie!`);
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("Rock crushes scissors! You win!");
            humanScore += 1;
        }
        else {
            console.log("Paper covers rock! You lose!");
            computerScore += 1; 
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("Paper covers rock! You win!");
            humanScore += 1;
        }
        else {
            console.log("Scissors cuts paper! You lose!");
            computerScore += 1;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log("Scissors cuts paper! You win!");
            humanScore += 1;
        }
        else {
            console.log("Rock crushes scissors! You lose!");
            computerChoice += 1;
        }
    }
    else {
        console.log("You didn't pick a valid choice. This round doesn't count.");
    }

    // Prints out the scoreboard
    console.log(`-------- Score --------\nPlayer: ${humanScore} | Computer: ${computerScore}`);
}

// Plays an entire game of Rock, Paper, Scissors 
function playGame() {
    console.log(`----------------- Rock, Paper, Scissors -----------------\n
Welcome to Rock, Paper, Scissors!\nYou and the computer will play five rounds of the game.\nMay the best player win!`);
    
    // Does five rounds of the game
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // Checks who has the most amount of points when the game finally ends
    if (humanScore > computerScore) {
        console.log("You win the game! Congratulations!");
    }
    else if (humanScore < computerScore) {
        console.log("The computer wins the game! Better luck next time!");                                               
    }
    else {
        console.log("It's a draw! The game is over!");
    } 
}

playGame();