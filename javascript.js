// randomly generate the computer choice
function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3) + 1;

    switch(rand){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

// prompt the user for their choice
function getHumanChoice() {
    let choice = prompt("Please enter 'rock', 'paper' or 'scissors'");
    
    while(choice != 'rock' && choice != 'paper' && choice != 'scissors' && choice != null){
        choice = prompt(choice + " is an unknown entry. Please enter 'rock', 'paper' or 'scissors'");
    }

    return choice;
}

// logic for one round of rock paper scissors
function playRound(humanChoice, computerChoice) {
    console.log("Computer has chosen " + computerChoice);
    console.log("You have chosen " + humanChoice);
    
    if(humanChoice == null) {
        return "computer";
    }

    if(computerChoice == 'rock') {
        if(humanChoice == 'rock') {
            console.log("You have tied!");
            return "tie";
        }
        else if (humanChoice == 'paper') {
            console.log("You have won!");
            return "human";
        }
        else if (humanChoice == 'scissors') {
            console.log("You have lost!");
            return "computer";
        }
    }
    else if (computerChoice == 'paper') {
        if(humanChoice == 'rock') {
            console.log("You have lost!");
            return "computer";
        }
        else if (humanChoice == 'paper') {
            console.log("You have tied!");
            return "tie";
        }
        else if (humanChoice == 'scissors') {
            console.log("You have won!");
            return "human";
        }
    }
    else if (computerChoice == 'scissors') {
        if(humanChoice == 'rock') {
            console.log("You have won!");
            return "human";
        }
        else if (humanChoice == 'paper') {
            console.log("You have lost!");
            return "computer";
        }
        else if (humanChoice == 'scissors') {
            console.log("You have tied!");
            return "tie";
        }
    }
}

// main game function
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // main loop for 5 rounds of rock paper scissors
    for(let i = 1; i <= 5; i++) {
        console.log("Round " + i + " / 5");
        
        let roundWinner = playRound(getHumanChoice(), getComputerChoice());

        if (roundWinner == "human") {
            humanScore++;
        }
        else if (roundWinner == "computer") {
            computerScore++;
        }

        console.log("Score: Human " + humanScore + ", Computer " + computerScore);
        console.log("");
    }

    // game conclusion message
    if(humanScore > computerScore) {
        console.log("Congratulations, you won the game!");
    }
    else if (humanScore < computerScore) {
        console.log("Oh no, you lost the game!");
    }
    else if (humanScore == computerScore) {
        console.log("You tied the game with the computer!");
    }
}

// main fuction call
playGame();