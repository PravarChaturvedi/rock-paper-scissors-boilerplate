

function startGame() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('game-page').style.display = 'block';
}


// Iteration 3.1: Declare the variables required for this game
let playerScore = 0;
let computerScore = 0;

// Iteration 3.2: Using random number function select the shapes randomly for the computer
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Iteration 3.3: Write onclick function with the game logic to make the game functional
function play(playerSelection) {
    const computerSelection = computerPlay();
    let resultMessage = '';

    if (playerSelection === computerSelection) {
        resultMessage = 'It\'s a tie!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        resultMessage = 'You win!';
        playerScore++;
    } else {
        resultMessage = 'Computer wins!';
        computerScore++;
    }

    displayResult(resultMessage, playerSelection, computerSelection);
}

// Iteration 3.4: Write a function with logic to display result
function displayResult(message, playerSelection, computerSelection) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `${message}<br>You chose ${playerSelection}, computer chose ${computerSelection}.<br>Player: ${playerScore} - Computer: ${computerScore}`;
}

// Iteration 3.5: When the play again button is clicked the game page should be reloaded
function restartGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('result').innerHTML = '';
}
