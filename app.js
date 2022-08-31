let playerScore = 0;
let computerScore = 0;
let totalScore = playerScore + computerScore;
const choices = ['rock', 'paper', 'scissors'];
const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const resultDiv = document.querySelector('.results');
const scoreDiv = document.querySelector('.score');
const gameOverDiv = document.querySelector('.game-over')
const resetGameDiv = document.querySelector('.reset-game')
const containerDiv = document.querySelector('.container')

rockBtn.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})

paperBtn.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})

scissorsBtn.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    const p = document.createElement('p')
    scoreDiv.innerText = `Player Score: ${playerScore} || Computer Score: ${computerScore}`
    resultDiv.innerText = ''
    if (playerSelection === computerSelection) {
        p.innerText = `It's a tie! You both chose ${playerSelection}.`;
        resultDiv.appendChild(p);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        p.innerText = `You win! ${playerSelection} beats ${computerSelection}.`;
        resultDiv.appendChild(p);
    } else {
        computerScore++
        p.innerText = `You lose! ${computerSelection} beats ${playerSelection}.`;
        resultDiv.appendChild(p)
    }
    checkForWinner(playerScore, computerScore);
}

function checkForWinner(playerScore, computerScore) {
    if (playerScore === 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('player-won');
        h2.innerText = `You beat the computer ${playerScore} to ${computerScore}`;
        gameOverDiv.appendChild(h2);
        endGame()
    } else if (computerScore === 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('computer-won');
        h2.innerText = `The computer beat you ${computerScore} to ${playerScore}`;
        gameOverDiv.appendChild(h2);
        endGame();
    }
}

function endGame() {
    rockBtn.setAttribute('disabled', 1)
    paperBtn.setAttribute('disabled', 1)
    scissorsBtn.setAttribute('disabled', 1)
    const resetBtn = document.createElement('button');
    resetBtn.innerText = 'New Game';
    resetGameDiv.appendChild(resetBtn);
    scoreDiv.innerText = ''
    resetBtn.addEventListener('click', function resetGame() {
        playerScore = 0;
        computerScore = 0;
        scoreDiv.innerText = ''
        resultDiv.innerText = ''
        gameOverDiv.innerText = ''
        resetGameDiv.removeChild(resetBtn);
        rockBtn.removeAttribute('disabled')
        paperBtn.removeAttribute('disabled')
        scissorsBtn.removeAttribute('disabled')
    })
}
