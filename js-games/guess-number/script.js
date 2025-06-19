let genNumber;
// let guessNumber;

const genNumberText = document.querySelector("#genNumber");
const compare = document.querySelector("#compare");
const guessNumberText = document.querySelector("#guessNumber");
const button1 = document.querySelector("#button1");

button1.innerText = "start";
button1.onclick = start;
checkGuess(guessNumberText.value);

function start() {   
    genNumber = Math.floor(Math.random() * 5);
    genNumberText.innerText = "?"
    console.log(genNumber);
}

function checkGuess(guessNumber) {

}