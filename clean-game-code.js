"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 10;

let highScore = 0;

// creating display message function to make repeatable code more DRY
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// backgroundColor function
const backgroundColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

// displayWidth function
const displayWidth = function (width) {
  document.querySelector(".number").style.width = width;
};

document.querySelector(".check").addEventListener("click", function () {
  // save value to a variable and convert string input to number for later comparisons
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //   implement game logic for no guess or if guess is outside of range
  if (!guess || guess < 1 || guess > 20) {
    displayMessage("🛑 Guess a number between 1 and 20...");

    // when player wins
  } else if (guess == secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    backgroundColor("#60b347");
    displayWidth("30rem");
    // disable .check btn upon winning
    document.querySelector(".check").disabled = true;

    // set new highScore logic if player wins and is above old highScore
    if (score > highScore) {
      displayMessage("🎉 Correct Number! & New High Score!");

      highScore = score;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");

      score--;
    } else {
      displayMessage("🙈 You lost the game!");
      document.querySelector(".number").textContent = secretNumber;
      backgroundColor("darkred");
      displayWidth("30rem");

      score = 0;
    }
  }

  // display score dynamically based on conditions
  document.querySelector(".score").textContent = score;

  // display highScore
  document.querySelector(".highscore").textContent = highScore;
});

// Implement game RESET functionality:
document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  backgroundColor("#222");
  displayWidth("15rem");
  document.querySelector(".check").disabled = false;
});
