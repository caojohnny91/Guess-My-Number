"use strict";
/*
syntax: 
document.querySelector(".class/#id/htmlElement").property.attribute = "string"

document.querySelector(".class/#id/htmlElement").addEventListener("event", reaction function () {
    Logic
    Logic
    Logic
}) = "string"

*/

// define secretNumber outside of click listener to only generate number once, if inside then new number every time it is clicked
// generate number bewtween 1 and 20
// syntax: Math.floor(Math.random() * max - min + 1) + min
// or syntax: Math.trunc(Math.random() * max) + 1
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

// init score to 20
let score = 10;

// init highScore
let highScore = 0;

// creating display message function to make repeatable code mor DRY
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Implement event handler to check btn
// select check class element, then add the addEventListener method (argument 1 (name of event to listen for): "click", argument 2 (reaction when event happens): handler function value)
document.querySelector(".check").addEventListener("click", function () {
  //   console.log(document.querySelector(".guess").value); // log for testing

  // save value to a variable
  const guess = Number(document.querySelector(".guess").value); // convert string input to number for later comparisons
  console.log(guess, typeof guess);

  //   implement game logic for no guess or if guess is outside of range
  // when input is incorrect
  if (!guess || guess < 1 || guess > 20) {
    // document.querySelector(".message").textContent =
    //   "🛑 Guess a number between 1 and 20...";

    // using new displayMessage function to REFACTOR
    displayMessage("🛑 Guess a number between 1 and 20...");

    // when player wins
  } else if (guess == secretNumber) {
    // document.querySelector(".message").textContent = "🎉 Correct Number!";
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    // change background color (style property, then attribute in camelCase and then string of value)
    document.querySelector("body").style.backgroundColor = "#60b347";
    // enlarge .number box
    document.querySelector(".number").style.width = "30rem";
    // disable .check btn upon winning
    document.querySelector(".check").disabled = true;

    // set new highScore logic if player wins and is above old highScore
    if (score > highScore) {
      //   document.querySelector(".message").textContent =
      //     "🎉 Correct Number! & New High Score!";
      displayMessage("🎉 Correct Number! & New High Score!");

      highScore = score;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector(".message").textContent =
      //     // message for when guess is too high/too low
      //     guess > secretNumber ? "📈 Too High!" : "📉 Too Low!";
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");

      score--;
    } else {
      // settings for when score is below 1
      // document.querySelector(".message").textContent = "🙈 You lost the game!";
      displayMessage("🙈 You lost the game!");
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "darkred";
      document.querySelector(".number").style.width = "30rem";

      score = 0;
    }
  }

  //   this is previous code before the above refactoring!
  //   // when guess is greater than secretNumber
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "📈 Too High!";

  //       // logic to decrease score by 1 every time the check button is decreased
  //       score--; // score = score - 1;
  //     } else {
  //       document.querySelector(".message").textContent = "🙈 You lost the game!";
  //       document.querySelector(".number").textContent = secretNumber;
  //       document.querySelector("body").style.backgroundColor = "darkred";
  //       document.querySelector(".number").style.width = "30rem";

  //       score = 0;
  //     }

  //     // when guess is less than secretNumber
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "📉 Too Low!";

  //       // logic to decrease score by 1 every time the check button is decreased
  //       score--; // score = score - 1;
  //     } else {
  //       document.querySelector(".message").textContent = "🙈 You lost the game!";
  //       document.querySelector(".number").textContent = secretNumber;
  //       document.querySelector("body").style.backgroundColor = "darkred";
  //       document.querySelector(".number").style.width = "30rem";

  //       score = 0;
  //     }
  //   }

  // display score dynamically based on conditions
  document.querySelector(".score").textContent = score;

  // display highScore
  document.querySelector(".highscore").textContent = highScore;
});

// Implement game RESET functionality:
document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".check").disabled = false;
});
