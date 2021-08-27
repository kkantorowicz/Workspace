console.log("First Splash script now logging... ");

// Selecting all the objects I wish to play with in my html
const guesses = document.querySelector('#guesses');
const lastResult = document.querySelector('#lastResult');
const lowOrHi = document.querySelector('#lowOrHi');
const guessCount = document.querySelector('#guessCount');
const numberOfTrys = document.querySelector('#trys');
const guessSubmit = document.querySelector('#guessSubmit');
const guessField = document.querySelector('#guessField');
const gameReset = document.querySelector('#gameReset');

//Declaring my global variables
const maxAttempts = 10;

let isFirstAttempt;
let attempts;
// let resetButton;   // this one is unused, just here incase I wanted to dynamicaly allocating a button on my page

// initialize the game board.
resetGame();

// Is it bad coding practice to put this before the written function it calls?
guessSubmit.addEventListener('click', checkGuess);

// Logic to check the guesses entered and determine winner or time out
function checkGuess() {
    let userGuess = Number(guessField.value);
    if (isFirstAttempt) {
        guesses.textContent = 'Previous Guesses: ';

        gameReset.disabled = false;
        gameReset.addEventListener('click', resetGame);

        isFirstAttempt = false;
    }

    guesses.textContent += userGuess + ' ';
    attempts++;

    if (userGuess === randomNumber) {
        lastResult.textContent = 'NAILED IT... YOU WIN!';
        lastResult.style.color = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (attempts >= maxAttempts) {
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.color = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }

    guessCount.textContent = `${attempts}`;

    guessField.value = '';
    guessField.focus();

    console.log(`Attempts: ${attempts}`)
}

// Logic that ensues at the end game scenario
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Not going to create the reset button on the fly because I want it to persist, but here is the code if one wanted to 
    // (although I don't know why one would... this is so crude and neolithic.  And the concept locks you into other 
    // horrible coding choices.)
    //
    // resetButton = document.createElement('button');
    // resetButton.textContent = 'Start new game';
    // document.body.append(resetButton);
    // resetButton.addEventListener('click', resetGame);
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}

// logic to reset/iniitialize the game
function resetGame() {
    isFirstAttempt = true;
    attempts = 0;

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // somewhere here I should be removing the child button my commented code above would add to doc.body, but I refuse to
    // put the statement in because it would break my code the way I have it currently structured and I can always just look
    // parentNode.removeChild up in MDN if I need it.
    //
    // Perhaps we can talk about why one would want to just indiscriminately hang a button out on the body like that in the 
    // first place.
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    guesses.textContent = '';

    guessField.disabled = false;
    guessSubmit.disabled = false;

    guessField.focus();

    randomNumber = Math.floor(Math.random() * 100) + 1;

    guessCount.textContent = `${attempts}`;
    lastResult.textContent = '';
    lowOrHi.textContent = '';
    numberOfTrys.textContent = `${maxAttempts}`;

    console.log(`Random Number: ${randomNumber}`);

    gameReset.disabled = true;
}