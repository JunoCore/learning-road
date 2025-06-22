let genNumber;
let outNumbers = [];
let i;
// let guessNumber;

const genNumberText = document.querySelector("#genNumber");
const compareText = document.querySelector("#compare");
const guessNumber = document.querySelector("#guessNumber");
const button1 = document.querySelector("#button1");
const outText = document.querySelector("#outNumbers1");
// const outNumbersText1 = document.querySelector("#outNumbers1");
const outNumbersText = document.querySelector("#outNumbers2");

// button1.onclick = start;
start();
// outNumbersText.innerText = "99";
// checkGuess();
// button1.onclick = checkGuess;

function start() {   
    outText.innerText = "/... " + "your guesses" + "/...";
    genNumber = Math.floor(Math.random() * 100);
    // genNumberText.innerText = genNumber;
    genNumberText.innerText = "make your guess";
    button1.innerText = "guess";
    i=0;
    button1.onclick = checkGuess;
    // checkGuess();
}

function checkGuess() {
    // button1.addEventListener('click', checkGuess);
    let yourGuess = guessNumber.value.trim();
    const yourGuessNum = parseInt(yourGuess, 10)
    // outNumbersText.innerText = yourGuessNum; 
    outNumbers.unshift(yourGuessNum);
    genNumberText.innerText = "X";
    // outNumbers.unshift(1);
   if ((yourGuessNum <=100)&&(yourGuessNum>=0)){
        if (yourGuessNum == genNumber) {
            genNumberText.innerText = genNumber;
            compareText.innerText = "=";
            outText.innerText =  "/... " + "WIN!!! WIN!!! WIN!!!";  
            outNumbersText.innerText = "";
            button1.innerText = "restart";  
            outNumbers = [];
            button1.onclick = start;
        } else if (yourGuessNum < genNumber) {
            compareText.innerText = ">";
            i++;
            if ((i/5) > 1) {
                i -=5 ;
                outNumbersText.innerText = outNumbers[0] + "..";
            } else outNumbersText.innerText += " " + outNumbers[0] + ".."; 
            // outText.innerText += " " + i + ".."; 
        } else if (yourGuessNum > genNumber) {
            compareText.innerText = "<";
            i++;
            if ((i/5) > 1) {
                i -=5 ;
                outNumbersText.innerText = outNumbers[0] + "..";
            } else outNumbersText.innerText += " " + outNumbers[0] + ".."; 
            // outText.innerText += " " + outNumbers[0] + "..";  
            // outText.innerText += " " + i + "..";
        }
   } else {
        genNumberText.innerText = "0...100";
        // button1.onclick = start;
   }
}

guessNumber.onfocus = function() {
  this.value = '';
  this.placeholder = '';
}