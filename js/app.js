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

const maxAttempts = 9
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
    console.log(event.target.textContent);
})
/*-------------------------------- Functions --------------------------------*/
// // Function to get random word
// function randomWord() {
//     console.log(words[Math.floor(Math.random() * words.length)]);
// }
// // randomWord()
// // randomWord();
// // randomWord()

// Game Initialization
const resetGame = () => {
    currentWord = words[Math.floor(Math.random() * words.length)];
    correctLetters = [];
    wrongGuess = 0;
    display.textContent = ""
    attempts.textContent = `${wrongGuess} / ${maxAttempts}`;
    updateWordDisplay();
}

// //.includes test 
// // if (words.includes('amen')) {
// //     console.log("True")
// // } else {
// //     console.log('false')
// // }

// 
const updateWord = () => {
    return currentWord.split('').map(letter => {
        if (correctLetters.includes(letter)) {
            return letter + " ";
        } else {
            return "_";
        }
    }).join('') //.join is needed because it helps return as string removing error. 
}

const updateWordDisplay = () => {
    wordDisplay.textContent = updateWord();
}

//Needs to be called after defining UpdateWordDisplay function, 
//otherwise it gives error for being undefined. 
resetGame();



