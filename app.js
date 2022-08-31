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
const startBtn = document.querySelector('#start-button')
const allBtns = document.querySelectorAll('button')
// const imgDiv = document.querySelector('#img-div')
let image = document.createElement('img')
rockBtn.setAttribute('hidden', 1)
paperBtn.setAttribute('hidden', 1)
scissorsBtn.setAttribute('hidden', 1)




startBtn.addEventListener('click', () => {
    rockBtn.removeAttribute('hidden', 1)
    paperBtn.removeAttribute('hidden', 1)
    scissorsBtn.removeAttribute('hidden', 1)
    startBtn.setAttribute('hidden', 1)
})

rockBtn.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
})

rockBtn.addEventListener('click', createRock)

paperBtn.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

})

paperBtn.addEventListener('click', createPaper)

scissorsBtn.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
})


scissorsBtn.addEventListener('click', createScissors)

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}


function createRock() {
    image.src = 'images/rock.png'
    image.classList.add('selection-img')
    containerDiv.appendChild(image)
}

function createPaper() {
    image.src = 'images/paper.png'
    image.classList.add('selection-img')
    containerDiv.appendChild(image)
    // paperBtn.removeEventListener('click', createPaper)
}

function createScissors() {
    image.src = 'images/scissors.png'
    image.classList.add('selection-img')
    containerDiv.appendChild(image)
    // scissorsBtn.removeEventListener('click', createScissors)
}


function playRound(playerSelection, computerSelection) {
    image.removeAttribute('hidden', 1)
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
        endGame();
    } else if (computerScore === 5) {
        const h2 = document.createElement('h2');
        h2.classList.add('computer-won');
        h2.innerText = `The computer beat you ${computerScore} to ${playerScore}`;
        gameOverDiv.appendChild(h2);
        endGame();
    }
}

function endGame() {
    image.setAttribute('hidden', 1)
    rockBtn.setAttribute('hidden', 1)
    paperBtn.setAttribute('hidden', 1)
    scissorsBtn.setAttribute('hidden', 1)
    const resetBtn = document.createElement('button');
    resetBtn.classList.add('new-game-btn')
    resetBtn.innerText = 'New Game';
    resetGameDiv.appendChild(resetBtn);
    scoreDiv.innerText = ''
    resultDiv.innerText = ''
    resetBtn.addEventListener('click', function resetGame() {
        playerScore = 0;
        computerScore = 0;
        gameOverDiv.innerText = ''
        resultDiv.innerText = 'Good Luck'
        resetGameDiv.removeChild(resetBtn);
        rockBtn.removeAttribute('hidden', 1)
        paperBtn.removeAttribute('hidden', 1)
        scissorsBtn.removeAttribute('hidden', 1)

    })
}
