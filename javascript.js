let round = 1;
let humanWins = 0;
let computerWins = 0;

// event listers for user input buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent, getComputerChoice());
    });
});

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

// main game logic including playing a round and checking the win condition
function playRound(humanChoice, computerChoice) {
    let humanScore = document.querySelector("#humanScore");
    let computerScore = document.querySelector("#computerScore");
    let whoWon = '';

    let messageDiv = document.querySelector(".outputMessages");
    let newMessage = document.createElement("p");
    newMessage.textContent = "Round " + round + ". You chose " + humanChoice + ", computer chose " + computerChoice + ". ";
    
    if(humanChoice == null) {
        whoWon = "computer";
    }
    else if(computerChoice == 'rock') {
        if (humanChoice == 'paper') {
            whoWon = "human";
        }
        else if (humanChoice == 'scissors') {
            whoWon = "computer";
        }
    }
    else if (computerChoice == 'paper') {
        if(humanChoice == 'rock') {
            whoWon = "computer";
        }
        else if (humanChoice == 'scissors') {
            whoWon = "human";
        }
    }
    else if (computerChoice == 'scissors') {
        if(humanChoice == 'rock') {
            whoWon = "human";
        }
        else if (humanChoice == 'paper') {
            whoWon = "computer";
        }
    }


    if(whoWon == "human") {
        newMessage.textContent += "You have won!";
        humanWins++;
        humanScore.textContent = "Human: " + humanWins;
    }
    else if(whoWon == "computer") {
        newMessage.textContent += "You have lost!";
        computerWins++;
        computerScore.textContent = "Computer: " + computerWins;
    }
    else {
        newMessage.textContent += "You have tied!";
    }

    messageDiv.appendChild(newMessage);
    round++;
    whoWon = '';

    // game conclusion
    if(humanWins == 5 || computerWins == 5) {
        let endMessage = document.createElement("h4");

        if(humanWins == 5) {
            endMessage.textContent = "Congratulations, you won the game!";
        }
        else if (computerWins == 5) {
            endMessage.textContent = "Oh no, you lost the game!"; 
        }

        messageDiv.appendChild(endMessage);

        let resetButton = document.createElement("button");
        resetButton.textContent = "Reset Game";
        resetButton.addEventListener("click", () => {
            resetGame();
        });

        messageDiv.appendChild(resetButton);

        buttons.forEach((button) => {
            button.disabled = true;
        });
    }
}

function resetGame() {
    round = 1;
    humanWins = 0;
    computerWins = 0;

    let messageDiv = document.querySelector(".outputMessages");
    let humanScore = document.querySelector("#humanScore");
    let computerScore = document.querySelector("#computerScore");

    humanScore.textContent = "Human: 0";
    computerScore.textContent = "Computer: 0";

    while(messageDiv.children.length > 1) {
        messageDiv.lastChild.remove();
    }

    buttons.forEach((button) => {
        button.disabled = false;
    });
}