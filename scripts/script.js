"use strict";

let firstOperand = 82;
let secondOperand = 84;
let operator = "+";
let displayValue = "";
let calcDisplay = document.getElementById("output");
let grandTotal = "";

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

operate("+");
