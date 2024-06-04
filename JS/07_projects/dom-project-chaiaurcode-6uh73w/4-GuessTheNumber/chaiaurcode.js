let randomNumber = parseInt((Math.random() * 100) + 1);
console.log(randomNumber);

const submit = document.querySelector("#subt");
const userInput = document.querySelector(".guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuesses = [];
let numberOfGuesses = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (event) {
        event.preventDefault();
        const guess = userInput.value;
        validateGuess(guess);
    });
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (parseInt(guess) < 1) {
        alert("Please enter a number greater than or equal to 0");
    } else if (parseInt(guess) > 100) {
        alert("Please enter a number less than or equal to 100");
    } else {
        const intGuess = parseInt(guess);
        if (numberOfGuesses === 10) {
            displayGuess(intGuess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            prevGuesses.push(intGuess);
            displayGuess(intGuess);
            checkGuess(intGuess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("You guessed it right");
        endGame();
    } if (guess < randomNumber) {
        displayMessage("Number is TOOO low");
    } if (guess > randomNumber) {
        displayMessage("Number is TOOO high");
    }
}

function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess} `;
    remaining.innerHTML = `${10 - numberOfGuesses}`;
    numberOfGuesses++;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", (_) => {
        randomNumber = parseInt((Math.random() * 100) + 1);
        console.log(randomNumber);
        prevGuesses = [];
        numberOfGuesses = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = '10';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}