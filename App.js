'use strict';

/*
My learning way in DOM 
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;
let highScore = 0;

const messageText = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When button clicked without number
  if (!guess) {
    messageText('❌ Not a number!');
    // When you found right number
  } else if (guess === secretNumber) {
    messageText('🏆 Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (scoreNumber > highScore) {
      highScore = scoreNumber;
      document.querySelector('.highscore').textContent = scoreNumber;
    }
  } else if (guess !== secretNumber) {
    if (scoreNumber > 1) {
      messageText(guess > secretNumber ? '🚁 Too high' : '🛥️ Too low');
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
      //When user lost the game
    } else {
      messageText('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  messageText('Start guessing...');
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreNumber = 20;
  document.querySelector('.score').textContent = scoreNumber;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').value = secretNumber;
});
