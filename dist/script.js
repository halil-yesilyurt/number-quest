const number = document.querySelector('.number');
const guess = document.querySelector('.guess').value;
const scoreEl = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const btnCheck = document.querySelector('.btn-check');
const btnAgain = document.querySelector('.btn-again');
let luckyNumber = Math.trunc(Math.random() * 30 + 1);
let score = 30;
