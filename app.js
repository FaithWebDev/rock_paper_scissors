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


function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection, computerSelection) {
    const p = document.createElement('p')
    const scoreText = document.createElement('p');
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
    checkForWinner(playerScore, computerScore)
}


function checkForWinner(playerScore, computerScore) {
    if (playerScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('player-won')
        h2.innerText = `You beat the computer ${playerScore} to ${computerScore}`
        gameOverDiv.appendChild(h2)
    } else if (computerScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('computer-won')
        h2.innerText = `The computer beat you ${computerScore} to ${playerScore}`
        gameOverDiv.appendChild(h2)
    }
}

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








// function game() {
//     for (i = 0; i < 5; i++) {
//         if (playRound(playerSelection, computerSelection) == 'player') {
//             playerScore++

//         } else if (playRound(playerSelection, computerSelection) == 'computer') {
//             computerScore++
//         }
//         const p = document.createElement('p')
//         p.innerText = `Player Score: ${playerScore} || Computer Score: ${computerScore}`
//         scoreDiv.appendChild(p)
//     }
//     if (playerScore > computerScore) {
//         console.log('Congrats! You won the game!')
//     } else if (playerScore < computerScore) {
//         console.log('Sorry, you lost the game! ')
//     } else {
//         console.log('Tie game!')
//     }
// }















































