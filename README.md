html


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rock Paper Scissors</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Rock Paper Scissors</h1>
    <div class="game-container">
      <div class="player-choice">
        <h2>Player</h2>
        <div class="choice" id="player-choice"></div>
      </div>
      <div class="computer-choice">
        <h2>Computer</h2>
        <div class="choice" id="computer-choice"></div>
      </div>
    </div>
    <div class="result">
      <h2 id="result-text">Choose your move</h2>
      <button class="btn" id="rock">Rock</button>
      <button class="btn" id="paper">Paper</button>
      <button class="btn" id="scissors">Scissors</button>
    </div>
    <div class="score">
      <div class="player-score">
        <h2>Player</h2>
        <span id="player-score">0</span>
      </div>
      <div class="computer-score">
        <h2>Computer</h2>
        <span id="computer-score">0</span>
      </div>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>





css



body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.game-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
}

.choice {
  width: 100px;
  height: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.result {
  text-align: center;
  margin-bottom: 2rem;
}

.btn {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 0.5rem;
}

.score {
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 800px;
}

.player-score, .computer-score {
  text-align: center;
}






js



const playerChoiceElement = document.getElementById('player-choice');
const computerChoiceElement = document.getElementById('computer-choice');
const resultTextElement = document.getElementById('result-text');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

function updateGameState(playerChoice, computerChoice) {
  playerChoiceElement.style.backgroundImage = `url(images/${playerChoice}.png)`;
  computerChoiceElement.style.backgroundImage = `url(images/${computerChoice}.png)`;

  const winner = determineWinner(playerChoice, computerChoice);
  resultTextElement.textContent = winner;

  if (winner === 'You win!') {
    playerScore++;
    playerScoreElement.textContent = playerScore;
  } else if (winner === 'Computer wins!') {
    computerScore++;
    computerScoreElement.textContent = computerScore;
  }
}

rockButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  updateGameState('rock', computerChoice);
});

paperButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  updateGameState('paper', computerChoice);
});

scissorsButton.addEventListener('click', () => {
  const computerChoice = getComputerChoice();
  updateGameState('scissors', computerChoice);
});

