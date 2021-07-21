'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 3;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // rodesac araa sheyvanili cipri
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';

    //rodecas motamashe igebs
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.number').style.width = '30rem';

    //rodesac sheyvanili cipri aris meti
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you loose  the  game';
    }

    // rodesac sheyvanili cipri aris naklebi
  } else if (guess < secretNumber)
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you loose  the  game';
    }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 3;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'start guessing';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
