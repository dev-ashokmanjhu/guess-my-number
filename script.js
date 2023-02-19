"use strict";
let message = document.querySelector(".message");
let guesss = document.querySelector(".guess");
let nmbr = document.querySelector(".number");
let body = document.querySelector("body");
let highscr = document.querySelector(".highscore");
let scr = document.querySelector(".score");
let btn = document.querySelector(".check");
let agin = document.querySelector(".again");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (msg) {
  message.textContent = msg;
};

btn.addEventListener("click", function () {
  const guess = Number(guesss.value);
  // When there is no input
  if (!guess) {
    displayMessage("⛔️ No number!");
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    nmbr.textContent = secretNumber;
    body.style.backgroundColor = "#60b347";
    nmbr.style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      highscr.textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      scr.textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      scr.textContent = 0;
    }
  }
});

agin.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  scr.textContent = score;
  nmbr.textContent = "?";
  guesss.value = "";

  body.style.backgroundColor = "#222";
  nmbr.style.width = "15rem";
});
