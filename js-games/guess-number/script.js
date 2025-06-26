import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth, signInAnonymously }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA2gZiuyXas3t21kGGmm-a7WM9pzgrkZbc",
  authDomain: "guess-number-web.firebaseapp.com",
  projectId: "guess-number-web",
  storageBucket: "guess-number-web.firebasestorage.app",
  messagingSenderId: "241961043205",
  appId: "1:241961043205:web:cb6cd84225357d0743a36c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// await signInAnonymously(auth);

async function saveScore(name, tries) {
    await addDoc(collection(db, "scores"), {
    player: name,
    attempts: tries,
    createdAt: serverTimestamp()  
    });
}

let genNumber;
let outNumbers = [];
let i;
let tries;
let name;
// let guessNumber;

const guess = document.querySelector("#guess");
const compareField = document.querySelector("#compareField");
const outWindow = document.querySelector("#outWindow");

const playerField = document.querySelector("#player");
const juno = document.querySelector("#juno");
const max = document.querySelector("#max");

const genField = document.querySelector("#genField");

const genNumberText = document.querySelector("#genNumber");
const compareText = document.querySelector("#compare");
const guessNumber = document.querySelector("#guessNumber");
const button1 = document.querySelector("#button1");
const outText = document.querySelector("#outNumbers1");
// const outNumbersText1 = document.querySelector("#outNumbers1");
const outNumbersText = document.querySelector("#outNumbers2");

// button1.onclick = start;
player();
// start();
// outNumbersText.innerText = "99";
// checkGuess();
// button1.onclick = checkGuess;

function player() {
  genField.style.display = "block";
  playerField.style.display = "flex";
  genNumberText.innerText = "choose your player";
  guess.style.display = "none";
  compareField.style.display = "none";
  outWindow.style.display = "none";
  juno.onclick = nameJuno;
  max.onclick = nameMax;
  // start();
}

function nameJuno() {
  name = "Juno";
  start();
}

function nameMax() {
  name = "Maxwell";
  start();
}

async function start() {   
  await signInAnonymously(auth);
  playerField.style.display = "none";
  guess.style.display = "block";
  compareField.style.display = "flex";
  outWindow.style.display = "flex";
  genField.style.display = "flex";
  outText.innerText = "/... " + "your guesses" + "/...";
  genNumber = Math.floor(Math.random() * 100);
  // genNumberText.innerText = genNumber;
  genNumberText.innerText = "make your guess";
  button1.innerText = "guess";
  i=0;
  tries=0;
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
            outText.innerText =  "/... " + "WIN!!! WIN!!! WIN!!!" + " in " + tries + " tries";  
            saveScore(name, tries);
            outNumbersText.innerText = "";
            button1.innerText = "restart";  
            outNumbers = [];
            button1.onclick = player;
        } else if (yourGuessNum < genNumber) {
            compareText.innerText = ">";
            i++;
            tries++;
            if ((i/5) > 1) {
                i -=5 ;
                outNumbersText.innerText = outNumbers[0] + "..";
            } else outNumbersText.innerText += " " + outNumbers[0] + ".."; 
            // outText.innerText += " " + i + ".."; 
        } else if (yourGuessNum > genNumber) {
            compareText.innerText = "<";
            i++;
            tries++;
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

