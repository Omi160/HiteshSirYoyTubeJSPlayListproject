let randomeNumber = (parseInt(Math.random()*100 + 1));

const submit = document.querySelector("#subt");
const userInput = document.querySelector(`#guessField`)
const guessSlot = document.querySelector(`.guesses`)
const remaining = document.querySelector(`.lastResult`)
const lowOrHi = document.querySelector(`.lowOrHi`)
const startOver = document.querySelector(`.resultParas`)

const p = document.createElement(`p`)

let prevGuess = [];
let numGuses = 1;

let playGame = true


if(playGame){
    submit.addEventListener(`click`,function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess (guess)
    })
} 


function validateGuess (guess) {
    if (isNaN(guess)) {
        alert(`Please enter a valid number`) 
        userInput.value = ``

    } else if (guess < 1 ){
        alert(`Please enter a number more then 1`)
        userInput.value = ``

    } else if (guess > 100 ){
        alert(`Please enter a number less then 100 `)
        userInput.value = ``
    } else {
        
        prevGuess.push(guess);
        if (numGuses === 10) {
            displayGuess(guess)
            displayMsg (`Game Over Randome number was ${randomeNumber}`)
            endGame();
        } else {
            displayGuess(guess)
            checkGuess (guess)
        }
    } 
}


function checkGuess (guess) {
    if(guess === randomeNumber){
        displayMsg(`YOW WIN`)
        endGame()
    } else if (guess < randomeNumber) {
        displayMsg (`Too Low`)
    } else if (guess > randomeNumber) {
        displayMsg (`Too high`)
    }
}


function displayGuess(guess) {
    userInput.value = ``
    guessSlot.innerHTML += `${guess},  `;
    numGuses ++;
    remaining.innerHTML = `${10 - numGuses}`

}


function displayMsg (msg) {
    lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}


function endGame() {
    userInput.value = ``;
    userInput.setAttribute(`disabled`, ``) 
    p.classList.add(`button`)
    p.innerHTML = `<h2 id="game">New Game Start</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame();
}


function newGame() {
        const newGameButton = document.querySelector(`#game`)
        newGameButton.addEventListener(`click`,function(e) {
            randomeNumber = parseInt(Math.random()*100 + 1);
            prevGuess = []
            numGuses = 1
            guessSlot.innerHTML = '';
            remaining.innerHTML = `${10 - numGuses} `;
            userInput.removeAttribute(`disabled`)
            startOver.removeChild(p)

            playGame = true;
    });
}