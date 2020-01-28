// Global game variables
let initialBet = 0;
let currentAmount = 0;
let scoresTally = [];

// Main game function to validate input and run game
function validateBet() {
  initialBet = document.forms["luckySevens"]["startBet"].value;
  if (initialBet === "" || isNaN(initialBet) || initialBet <= 0) {
    alert("Starting Bet must be greater than 0");
    resetBet();
    return false;
  } else {
    currentAmount = initialBet;
    playGame();
    displayResults();
    return false;
  }
}

// Resets starting bet input
function resetBet() {
  document.forms["luckySevens"]["startBet"].value = "";
  document.forms["luckySevens"]["startBet"].focus();
}

// Resets game and variables
function gameReset() {
  initialBet = 0;
  currentAmount = 0;
  scoresTally = [];
  resetBet();

  window.location.reload(true);
}

// Returns total of 2 dice roll
function rollDice() {
  let dice1 = Math.ceil(Math.random() * 6);
  let dice2 = Math.ceil(Math.random() * 6);
  return dice1 + dice2;
}

// Increases or decreases money winnings based on dice roll and pushes to scoresTally array
function playGame() {
  while (currentAmount > 0) {
    let totalRoll = rollDice();
    if (totalRoll === 7) currentAmount += 4;
    else currentAmount -= 1;
    scoresTally.push(currentAmount);
  }
  return scoresTally;
}

// Returns highest score from scoresTally array
function getHighScore() {
  let highScore = 0;
  for (score of scoresTally) {
    if (score > highScore) {
      highScore = score;
    }
  }
  return highScore;
}

// Displays results table
function displayResults() {
  let highestScore = getHighScore();
  let highScoreIndex = scoresTally.indexOf(highestScore);
  document.getElementById("results").style.display = "block";
  document.getElementById("playButton").innerText = "Play Again";
  document.getElementById("playButton").type = "reset";
  document.getElementById("initialBet").innerText = initialBet;
  document.getElementById("rollCount").innerText = scoresTally.length;
  document.getElementById("highestAmount").innerText = highestScore;
  document.getElementById("rollCountHigh").innerText = highScoreIndex + 1;
}
