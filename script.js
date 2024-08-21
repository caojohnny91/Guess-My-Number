"use strict";

// select element with the class name of message (if it was an id #message) and then selecting the textContent property by using another .
console.log(document.querySelector(".message").textContent); // Start guessing...

document.querySelector(".message").textContent = " 🎉 Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23; // target the value property .value because its an input element
console.log(document.querySelector(".guess").value);
