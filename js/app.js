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
    handleKeyInput(key);
    checkWinLoss();
  });
});

resetButton.addEventListener("click", (event) => {
  console.log(event.target.textContent);
  resetGame();
});
/*-------------------------------- Functions --------------------------------*/

// Game Initialization
const resetGame = () => {
  currentWord = words[Math.floor(Math.random() * words.length)];
  correctLetters = [];
  wrongGuess = 0;
  display.textContent = "";
  attempts.textContent = `${wrongGuess} / ${maxAttempts}`;
  updateWordDisplay();
  enableButtons();
};

// Display Random word on Word Display
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
};

//Button Clicking
const handleKeyInput = (key) => {
  key = key.toLowerCase();
  if (currentWord.includes(key)) {
    if (!correctLetters.includes(key)) {
      correctLetters.push(key);
      updateWordDisplay();
    }
  } else {
    wrongGuess++;
    attempts.textContent = `${wrongGuess} / ${maxAttempts}`;
  }
};

//Win/Loss Logic
const checkWinLoss = () => {
  if (updateWord().includes("_") === false) {
    display.textContent = "You Win!!!";
    disableButtons();
  } else if (wrongGuess >= maxAttempts) {
    display.textContent = `Sorry, You Lose! The word was ${currentWord}.`;
    disableButtons();
  }
};

//Disable Buttons Once Game is Over
const disableButtons = () => {
    buttons.forEach((button) => {
        button.disabled = true;
    })
}

//Enable Buttons for Restart
const enableButtons = () => {
    buttons.forEach((button) => {
        button.disabled = false;
    })
}

resetGame();