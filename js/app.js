// 1) Define any variables used to track the state of the game:
//    The players choice
//    The match result - win/lose
//    A result message - display who won that round

// 2) Define the required constants:

// 3) Handle a player clicking a button

// 4) Handle generating random selections for the word

// 5) Compare the player choice to the selected word

// 6) Render a win/lose message to the player


/*-------------------------------- Constants --------------------------------*/
const words = [
    "supernova", "asteroid", "galaxy", "orbit", "spacesuit", "blackhole",
    "comet", "moon", "starship", "extraterrestrial", "constellation", "solar",
    "meteor", "hyperspace", "expedition", "nebula", "quasar", "planet",
    "gravity", "telescope", "intergalactic", "universe", "rocket", "eclipse",
    "phenomenon", "satellite", "astronaut"
];

const maxAttemps = 9
const word = words[Math.floor(Math.random() * words.length)];
/*-------------------------------- Variables --------------------------------*/
let currentWord;
let correctLetters;
let wrongGuess;
/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.key');
const resetButton = document.querySelector('.reset')
const display = document.querySelector('#display')
const wordDisplay = document.querySelector('.word-display')
const attempts = document.querySelector('.attempts')
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const key = event.target.textContent;
        console.log(key)
    })
})

resetButton.addEventListener('click', (event) => {
    console.log(event.target.textContent)
})
/*-------------------------------- Functions --------------------------------*/

//Game Initialization
const resetGame = () => {
    correctLetters = [];
    wrongGuess = 0;
    currentWord = word;
    attempts.textContent = `${wrongGuess} / ${maxAttemps}`;
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter">_</li>`).join("");
    display.textContent = "";
}

//resetGame();

//.includes test 
// if (words.includes('amen')) {
//     console.log("True")
// } else {
//     console.log('false')
// }

const handleKey = (key) => {
    key = key.toUpperCase();
    if (currentWord.includes(key)) {
        correctLetters.push(key);
    } else {
        wrongGuesses++;
        attempts.textContent = `${wrongGuesses} / ${maxAttempts}`;
    } 
};

//Show Word in Display
const updateDisplay = () => {
    
}


// // Win/Loss Function



