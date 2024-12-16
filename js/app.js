/*-------------------------------- Variables --------------------------------*/
  let currentWord;
  let correctLetters;
  let wrongGuess;
/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll(".key");
const resetButton = document.querySelector(".reset");
const display = document.querySelector("#display");
const wordDisplay = document.querySelector(".word-display");
const attempts = document.querySelector(".attempts");
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const key = event.target.textContent;
    //console.log(key);
    handleKeyInput(key);
    checkWinLoss();
  });
});

// const stopButtons = () => {
//     buttons.forEach(button => {
//         button.removeEventListener('click', (event))
//     })
// }

resetButton.addEventListener("click", (event) => {
  console.log(event.target.textContent);
  resetGame();
});
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
  display.textContent = "";
  attempts.textContent = `${wrongGuess} / ${maxAttempts}`;
  updateWordDisplay();
};

// //.includes test
// // if (words.includes('amen')) {
// //     console.log("True")
// // } else {
// //     console.log('false')
// // }

//
const updateWord = () => {
  return currentWord
    .split("")
    .map((letter) => {
      if (correctLetters.includes(letter)) {
        return letter + " ";
      } else {
        return "_ ";
      }
    })
    .join(""); //.join is needed because it helps return as string removing error.
};

const updateWordDisplay = () => {
  wordDisplay.textContent = updateWord();
  //console.log(wordDisplay.textContent);
};

//Needs to be called after defining UpdateWordDisplay function,
//otherwise it gives error for being undefined.
resetGame();

//Button Clicking
const handleKeyInput = (key) => {
  key = key.toLowerCase();
  if (currentWord.includes(key)) {
    if (!correctLetters.includes(key)) {
      correctLetters.push(key);
      //console.log(correctLetters);
      updateWordDisplay();
    }
  } else {
    wrongGuess++;
    attempts.textContent = `${wrongGuess} / ${maxAttempts}`;
    //console.log(wrongGuess)
  }
};

//Win/Loss Logic
const checkWinLoss = () => {
  if (updateWord().includes("_") === false) {
    display.textContent = "You Win!!!";
  } else if (wrongGuess >= maxAttempts) {
    display.textContent = `Sorry, You Lose! The word was ${currentWord}.`;
  }
  //stopButtons();
};

// //Make Buttons stop working
// buttons.removeEventListener('click', event)
