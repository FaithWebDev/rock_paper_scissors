let playerScore = 0;
let computerScore = 0;
let totalScore = playerScore + computerScore;
const choices = ['rock', 'paper', 'scissors'];




function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(playerSelection, computerSelection) {
    if ((playerSelection == 'rock' && computerSelection == 'scissors')
        || (playerSelection == 'scissors' && computerSelection == 'paper')
        || (playerSelection == 'paper' && computerSelection == 'rock')) {
        return 'player';
    } else if ((playerSelection == 'rock' && computerSelection == 'paper')
        || (playerSelection == 'paper' && computerSelection == 'scissors')
        || (playerSelection == 'scissors' && computerSelection == 'rock')) {
        return 'computer'
    } else {
        return 'tie'
    }
}


function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result === 'tie') {
        return `It's a tie! You both chose ${playerSelection}.`;
    } else if (result === 'player') {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function getPlayerSelection() {
    let validateInput = false;
    while (validateInput == false) {
        const choice = prompt('Rock, Paper, or Scissors?')
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (choices.includes(choiceInLower)) {
            validateInput = true;
            return choiceInLower;
        }
    }
}


function game() {
    for (i = 0; i < 5; i++) {
        const playerSelection = getPlayerSelection();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

        if (checkWinner(playerSelection, computerSelection) == 'player') {
            playerScore++
        } else if (checkWinner(playerSelection, computerSelection) == 'computer') {
            computerScore++
        }
        console.log(`Player Score: ${playerScore} || Computer Score: ${computerScore}`)
    }
    if (playerScore > computerScore) {
        console.log('Congrats! You won the game!')
    } else if (playerScore < computerScore) {
        console.log('Sorry, you lost the game! ')
    } else {
        console.log('Tie game!')
    }
}
console.log(game())




























