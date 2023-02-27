// randomly generates a number between 1 and the input number
function randomSelection(number) {
    let output = Math.floor((Math.random() * number) + 1);
    return output;
}

// randomly generates either rock, paper, or scissors
// and returns the selection as a string
function computerSelection() {
    let num = randomSelection(3);
    let selection = "";
    switch (randomSelection(num)) {
        case 1:
            selection = "rock";
            return selection;
        case 2:
            selection = "paper";
            return selection;
        case 3:
            selection = "scissors";
            return selection;
    }
}

// allows the user to choose either rock, paper, or scissors
// and returns the user's choice as a lowercase string
function playerChoice() {
    let choice = prompt("Make your selection by typing either 'rock', 'paper', or 'scissors'");
    return choice.toLowerCase();
}

// runs a match comparing the computer selection to the user's choice
// returns 1 for a tie, 2 for a loss, and 3 for a win
function match(comp, user) {
    if (comp === user) {
        alert("Tie!");
        return 1;
    }
    else if (comp === "rock" && user === "scissors") {
        alert("You Lose! Rock beats Scissors!");
        return 2;
    }
    else if (comp === "rock" && user === "paper") {
        alert("You Win! Paper beats Rock!");
        return 3;
    }
    else if (comp === "paper" && user === "scissors") {
        alert("You Win! Scissors beats Paper!");
        return 3;
    }
    else if (comp === "paper" && user === "rock") {
        alert("You Lose! Paper beats Rock!");
        return 2;
    }
    else if (comp === "scissors" && user === "rock") {
        alert("You Win! Rock beats Scissors!");
        return 3;
    }
    else if (comp === "scissors" && user === "paper") {
        alert("You Lose! Scissors beats Paper!");
        return 2;
    }
}

function game() {
    let compScore = 0;
    let userScore = 0;
    alert("Welcome to Rock, Paper, Scissors!");
    for (i=0; i<5; i++) {
        let result = match(computerSelection(), playerChoice());
        if (result === 2) {
            compScore++;
        }
        else if (result === 3) {
            userScore++;
        }
        alert("Your Score: " + userScore + "\n" + "Computer Score: " + compScore);
    }
    if (userScore > compScore) {
        alert("You're the winner!" + "\n" + 
        "Your Score: " + userScore + "\n" + "Computer Score: " + compScore);
    }
    else if (compScore > userScore) {
        alert("You're the loser!"+ "\n" + 
        "Your Score: " + userScore + "\n" + "Computer Score: " + compScore);
    }
    else {
        alert("It's a tie!"+ "\n" + 
        "Your Score: " + userScore + "\n" + "Computer Score: " + compScore);
    }
    alert("Thanks for playing!");
}

game();