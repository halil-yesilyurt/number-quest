const number = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const btnCheck = document.querySelector('.btn-check');
const btnAgain = document.querySelector('.btn-again');
let message = document.querySelector('.message');
let luckyNumber = Math.trunc(Math.random() * 30 + 1);
let score = 30;

function showMessage(text, color = '#edede9') {
  message.textContent = text;
  message.style.color = color;
}
console.log(luckyNumber);
function checkNumber() {
  const guess = Number(document.querySelector('.guess').value);
  // if there is no input
  if (!guess) {
    showMessage('Please enter a number!', '#982222');
  } else if (guess === luckyNumber) {
    showMessage('Number is correct!', '#13006e');
    highScore.textContent = score;
    number.textContent = luckyNumber;
    number.style.width = '13rem';
    document.querySelector('body').style.backgroundImage = 'linear-gradient(to right, #00b09b, #96c93d)';
  } else if (guess !== luckyNumber) {
    if (score > 1) {
      showMessage(guess < luckyNumber ? 'Too low' : 'Too high');
      score--;
      scoreEl.textContent = score;
    } else {
      showMessage('You lost the game', '#000');
      scoreEl.textContent = 0;
      document.querySelector('body').style.backgroundImage = 'linear-gradient(to right, #33001b, #ff0084)';
    }
  }
}

btnCheck.addEventListener('click', checkNumber);
