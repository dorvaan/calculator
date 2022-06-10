"use strict";

let firstOperand = "";
let secondOperand = "";
let operator = "";
let displayValue = "";
let calcDisplay = document.getElementById("output");
let grandTotal = "";

const clearButton = document.getElementById("btnClear");
const numberButtons = document.querySelectorAll(".btnNumber");
const operatorButtons = document.querySelectorAll(".btnOperator");

numberButtons.forEach((button) =>
  button.addEventListener("click", () => {
    appendNumber(button.textContent);
  })
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => {
    appendOperator(button.textContent);
  })
);

document.getElementById("btnEqual").addEventListener("click", () => {
  secondOperand = displayValue;
  console.log(`First Operand ${firstOperand}`);
  console.log(`Second Operand ${secondOperand}`);
  console.log(`Operator ${operator}`);
  displayValue = "";
  operate(operator);
  console.log();
});

function appendNumber(number) {
  displayValue += number;
  console.log(displayValue);
  calcDisplay.innerHTML = displayValue;
  return displayValue;
}

function appendOperator(calcOperator) {
  firstOperand = displayValue;
  operator = calcOperator;
  calcDisplay.innerHTML = `${displayValue} ${operator}`;
  displayValue = "";
  console.log(`First Operand: ${firstOperand}`);
  console.log(firstOperand);
  console.log(`Operator: ${operator}`);
  console.log(`DisplayValue: ${displayValue}`);
}

clearButton.addEventListener("click", clear);

//Function to call the Calculator operations
function operate(operator) {
  if (operator == "+") {
    calcDisplay.innerHTML = addTotal(
      number(firstOperand),
      number(secondOperand)
    );
  } else if (operator === "-") {
    calcDisplay.innerHTML = subTotal(firstOperand, secondOperand);
  } else if (operator === "x") {
    calcDisplay.innerHTML = multTotal(firstOperand, secondOperand);
  } else if (operator === "÷") {
    calcDisplay.innerHTML = divTotal(firstOperand, secondOperand);
  }
}

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

//Clear Screen
function clear() {
  calcDisplay.innerHTML = 0;
  firstOperand = "";
  secondOperand = "";
  operator = "";
  displayValue = "";
}

//Clear Screen on Load
//clear();

//operate("*");
