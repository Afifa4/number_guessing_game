"use strict";

let secertNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secertNumber); // for pcheck real number

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    //when there is no number
    document.querySelector(".message").textContent = "No number !";
    //when player wins
  } else if (guess === secertNumber) {
    document.querySelector(".message").textContent = "CORRECT NUMBER!";
    document;

    document.querySelector(".number").textContent = secertNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
    //when guess is too high
  } else if (guess > secertNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High📊";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the Game";
    }
    //when guess is two low
  } else if (guess < secertNumber) {
    document.querySelector(".message").textContent = "Too Low! 📉";
    score--;
    document.querySelector(".score").textContent = score;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secertNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = `Start guessing...`;
  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";

  document.querySelector(".body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
