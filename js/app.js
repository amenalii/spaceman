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

/*-------------------------------- Variables --------------------------------*/
let playerChoice;
let msg;

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.key');
const resetbutton = document.querySelector('.reset')

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const key = event.target.textContent;
        console.log(key)
    })
})

resetbutton.addEventListener('click', (event) => {
    console.log(event.target.textContent)
})
/*-------------------------------- Functions --------------------------------*/
