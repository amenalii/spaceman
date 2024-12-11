/*-------------------------------- Constants --------------------------------*/
const words = [
    "supernova", "asteroid", "galaxy", "orbit", "spacesuit", "blackhole",
    "comet", "moon", "starship", "extraterrestrial", "constellation", "solar",
    "meteor", "hyperspace", "expedition", "nebula", "quasar", "planet",
    "gravity", "telescope", "intergalactic", "universe", "rocket", "eclipse",
    "phenomenon", "satellite", "astronaut"
];

const buttons = document.querySelectorAll('.key');
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const key = event.target.textContent;
        console.log(key)
    })
})
/*-------------------------------- Functions --------------------------------*/
