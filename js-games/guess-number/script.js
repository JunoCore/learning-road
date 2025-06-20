let genNumber;
// let guessNumber;

const genNumberText = document.querySelector("#genNumber");
const compareText = document.querySelector("#compare");
const guessNumber = document.querySelector("#guessNumber");
const button1 = document.querySelector("#button1");
// const outText = document.querySelector("#outText");
const outNumbersText = document.querySelector("#outNumbers");

button1.innerText = "start";
button1.onclick = start;
// outNumbersText.innerText = "99";
// checkGuess();
// button1.onclick = checkGuess;

function start() {   
    outNumbersText.innerText = "your guesses" + "/...";
    genNumber = Math.floor(Math.random() * 100);
    genNumberText.innerText = genNumber;
    // genNumberText.innerText = "???";
    button1.innerText = "guess";
    button1.onclick = checkGuess;
    // checkGuess();
}

function checkGuess() {
    // button1.addEventListener('click', checkGuess);
    
    let yourGuess = guessNumber.value.trim();
    const yourGuessNum = parseInt(yourGuess, 10)
    // outNumbersText.innerText = yourGuessNum; 
   // while (yourGuessNum !== genNumber){
        
        if (yourGuessNum == genNumber) {
            genNumberText.innerText = genNumber;
            compareText.innerText = "=";
            outNumbersText.innerText = "WIN!!! WIN!!! WIN!!!";  
            button1.innerText = "restart";  
            button1.onclick = start;
        } else if (yourGuessNum < genNumber) {
            compareText.innerText = ">";
            outNumbersText.innerText += " " + yourGuessNum + "..";  
        } else if (yourGuessNum > genNumber) {
            compareText.innerText = "<";
            outNumbersText.innerText += " " + yourGuessNum + "..";  
        }
   // }
}

guessNumber.onfocus = function() {
  this.value = '';
  this.placeholder = '';
}