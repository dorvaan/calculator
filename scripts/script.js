"use strict";

let firstOperand = 82;
let secondOperand = 4;
let operator = "+";
let calcDisplay = document.getElementById("output");

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

calcDisplay.innerHTML = addTotal(firstOperand, secondOperand);

function operate(operator) {
  if (operator == "+") {
    addTotal(firstOperand, secondOperand);
  } else if (operator === "-") {
    subTotal(firstOperand, secondOperand);
  } else if (operator === "*") {
    multTotal(firstOperand, secondOperand);
  } else if (operator === "/") {
    divTotal(firstOperand, secondOperand);
  }
}

operate("+");
console.log(addTotal);
