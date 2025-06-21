let genNumber;
let outNumbers = [];
let i;
// let guessNumber;

const genNumberText = document.querySelector("#genNumber");
const compareText = document.querySelector("#compare");
const guessNumber = document.querySelector("#guessNumber");
const button1 = document.querySelector("#button1");
const outText = document.querySelector("#outText");
const outNumbersText = document.querySelector("#outNumbers");

// button1.onclick = start;
start();
// outNumbersText.innerText = "99";
// checkGuess();
// button1.onclick = checkGuess;

function start() {   
    outText.innerText = "/... " + "your guesses" + "/...";
    genNumber = Math.floor(Math.random() * 100);
    genNumberText.innerText = genNumber;
    // genNumberText.innerText = "???";
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
    outNumbers.push(yourGuessNum);
    // outNumbersText.innerText = ;
    // outNumbers.unshift(1);
   if ((yourGuessNum <=100)&&(yourGuessNum>=0)){
        if (yourGuessNum == genNumber) {
            genNumberText.innerText = genNumber;
            compareText.innerText = "=";
            outNumbersText.innerText = "WIN!!! WIN!!! WIN!!!";  
            button1.innerText = "restart";  
            outNumbers = [];
            button1.onclick = start;
        } else if (yourGuessNum < genNumber) {
            compareText.innerText = ">";
            i++;
            outNumbersText.innerText += " " + outNumbers[i-1] + ".."; 
            // outNumbersText.innerText += " " + i + ".."; 
        } else if (yourGuessNum > genNumber) {
            compareText.innerText = "<";
            i++;
            outNumbersText.innerText += " " + outNumbers[i-1] + "..";  
            // outNumbersText.innerText += " " + i + "..";
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