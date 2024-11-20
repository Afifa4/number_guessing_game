"use strict";

let secertNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secertNumber); // for pcheck real number

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when player wins
  if (!guess) {
    displayMessage("⛔ No number !");
  }
  //when player wins
  else if (guess === secertNumber) {
    displayMessage("🎊 CORRECT NUMBER!");

    document.querySelector(".number").textContent = secertNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  //when guess is wrong
  else if (guess !== secertNumber) {
    if (score > 1) {
      displayMessage(guess > secertNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff0000";
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secertNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secertNumber); //for prechecker
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
