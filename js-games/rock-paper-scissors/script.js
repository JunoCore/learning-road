const rockButton = document.querySelector("#button-rock");
const paperButton = document.querySelector("#button-paper");
const scissorsButton = document.querySelector("#button-scissors");
const bodyGame1 = document.querySelector("#body-game-1");
const bodyGame2 = document.querySelector("#body-game-2");
const bodyGame3 = document.querySelector("#body-game-3");

const playerChoiceImg = document.querySelector("#body-game-1-img");
const compChoiceImg = document.querySelector("#body-game-3-img");

const playerScoreText = document.querySelector("#player-score");
const compScoreText = document.querySelector("#comp-score");

const playButton = document.querySelector("#button-play");

let i;
let playerChoice;
let compChoice;
let playerScore = 0;
let compScore = 0;

const pool = [
    { number: 0, name: "ROCK", address: "images/rock.png"},
    { number: 1, name: "PAPER", address: "images/paper.png"},
    { number: 2, name: "SCISSORS", address: "images/scissors-2.png"}
] 

choice();

function choice() {
    rockButton.style.display = "block";
    paperButton.style.display = "block";
    scissorsButton.style.display = "block";
    bodyGame1.style.display = "none";
    bodyGame2.style.display = "none";
    bodyGame3.style.display = "none";
    rockButton.addEventListener('click', () => {
        playerChoice = pool[0];
        results();
    });
    paperButton.addEventListener('click', () => {
        playerChoice = pool[1];
        results();
    });
    scissorsButton.addEventListener('click', () => {
        playerChoice = pool[2];
        results();
    });
    
}

function results() {
    rockButton.style.display = "none";
    paperButton.style.display = "none";
    scissorsButton.style.display = "none";
    bodyGame1.style.display = "block";
    playerChoiceImg.src = playerChoice["address"];
    bodyGame2.style.display = "block";
    bodyGame3.style.display = "block";
    compChoice = pool[Math.floor(Math.random() * 3)];
    compChoiceImg.src = compChoice["address"];
    // bodyGame2.innerText = playerChoice["address"];
    condition(playerChoice["number"], compChoice["number"]);
    playerScoreText.innerText = playerScore;
    compScoreText.innerText = compScore;
}


function condition(a, b) {
    if (((a!=2)&&(b!=0))&&((a!=0)&&(b!=2))) {
        if (a>b){
            playerScore++;
    } else if (a<b) {
            compScore++;
    } 
    } else {
        if (a<b){
            playerScore++;
    } else if (a>b) {
            compScore++;
    } 
    }

}
