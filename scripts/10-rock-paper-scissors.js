let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loss: 0,
  tie: 0
}

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
      score.loss++;
    } else if (computerMove === 'paper') {
      result = 'You win.';
      score.wins++;
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
      score.tie++;
    }
  }

  if(playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
      score.wins++;
    } else if (computerMove === 'paper') {
      result = 'Tie.';
      score.tie++;
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
      score.loss++;
    }
  }

  if(playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
      score.tie++;
    } else if (computerMove === 'paper') {
      result = 'You lose.';
      score.loss++;
    } else if (computerMove === 'scissors') {
      result = 'You win.';
      score.wins++;
    }
  }

  localStorage.setItem('score',JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves').innerHTML = 
    `You 
    <img src="pictures/${playerMove}-emoji.png" class="move-icon">
    <img src="pictures/${computerMove}-emoji.png" class="move-icon">
    Computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.loss}, Ties: ${score.tie}`;
}

function pickComputerMove() {
  const randomNumber = Math.random() * 3;

  let computerMove = '';

  if (randomNumber < 1) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 && randomNumber < 2) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  return computerMove;
}

function resetScore() {
  score.wins = 0;
  score.loss = 0;
  score.tie = 0;

  document.querySelector('.js-result').innerHTML = '';
  document.querySelector('.js-moves').innerHTML = '';
}