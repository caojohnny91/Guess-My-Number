"use strict";
/*
select element with the class name of message (if it was an id #message) and then selecting the textContent property by using another .
console.log(document.querySelector(".message").textContent); // Start guessing...

document.querySelector(".message").textContent = " 🎉 Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23; // target the value property .value because its an input element
console.log(document.querySelector(".guess").value);
*/

// Implement event handler to check btn
// select check class element, then add the addEventListener method (argument 1 (name of event to listen for): "click", argument 2 (reaction when event happens): function value)
document.querySelector(".check").addEventListener("click", function () {
  //   console.log(document.querySelector(".guess").value); // log for testing

  // generate secretNumber bewtween 1 and 20
  // syntax: Math.floor(Math.random() * max - min + 1) + min
  // let secretNumber = function () {
  //   return Math.floor(Math.random() * (20 - 1 + 1) + 1);
  // };
  let secretNumber = function () {
    return Math.floor(Math.random() * (20 - 1 + 1) + 1);
  };
  console.log(secretNumber());

  // save value to a variable
  const guess = Number(document.querySelector(".guess").value); // convert string input to number for later comparisons
  console.log(guess, typeof guess);

  // implement game logic for no guess or if guess is outside of range
  if (!guess || guess < 1 || guess > 20) {
    document.querySelector(".message").textContent =
      "🛑 Guess a number between 1 and 20...";
  } else if (guess == secretNumber) {
    document.querySelector(".number").textContent = secretNumber();
  }
});
