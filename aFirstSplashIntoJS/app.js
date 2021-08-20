console.log("First Splash script now logging... ");

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

guesses.textContent = `${guessCount}`;
lastResult.textContent = 'Wrong!';
lowOrHi.textContent = 'Low';

console.log(`Random Number: ${randomNumber}`);
console.log(`NUmber of Guesses: ${guessCount}`);
console.log(`Reset?: ${resetButton}`);

