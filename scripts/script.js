"use strict";

let firstOperand = 82;
let secondOperand = 84;
let operator = "+";
let displayValue = "";
let calcDisplay = document.getElementById("output");
let grandTotal = "";

const clearButton = document.getElementById("btnClear");
const numberButtons = document.querySelectorAll("[btnNumber]");

clearButton.addEventListener("click", clear);

numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

//Calculator Operations
const addTotal = (firstOperand, secondOperand) => {
  let a = firstOperand + secondOperand;
  return a;
};

const subTotal = (firstOperand, secondOperand) => {
  let a = firstOperand - secondOperand;
  return a;
};

const multTotal = (firstOperand, secondOperand) => {
  let a = firstOperand * secondOperand;
  return a;
};

const divTotal = (firstOperand, secondOperand) => {
  let a = firstOperand / secondOperand;
  return a;
};

//Function to call the Calculator operations
function operate(operator) {
  if (operator == "+") {
    calcDisplay.innerHTML = addTotal(firstOperand, secondOperand);
  } else if (operator === "-") {
    calcDisplay.innerHTML = subTotal(firstOperand, secondOperand);
  } else if (operator === "*") {
    calcDisplay.innerHTML = multTotal(firstOperand, secondOperand);
  } else if (operator === "/") {
    calcDisplay.innerHTML = divTotal(firstOperand, secondOperand);
  }
}

//Clear Screen
function clear() {
  calcDisplay.innerHTML = 0;
}

//Clear Screen on Load
//clear();

//operate("*");
