"use strict";

let firstOperand = "";
let secondOperand = "";
let operator = "";
let displayValue = "";
let calcDisplay = document.getElementById("output");
let grandTotal = "";

const clearButton = document.getElementById("btnClear");
const backSpaceButton = document.getElementById("btnBackSpace");
const numberButtons = document.querySelectorAll(".btnNumber");
const operatorButtons = document.querySelectorAll(".btnOperator");
const equalsButton = document.getElementById("btnEqual");
const decimalButton = document.getElementById("btnDecimal");

//CREATE CLICK EVENTS FOR NUMBER BUTTONS
numberButtons.forEach((button) =>
  button.addEventListener("click", () => {
    appendNumber(button.textContent);
  })
);

//CREATE EVENTS FOR OPERATOR BUTTONS
operatorButtons.forEach((button) =>
  button.addEventListener("click", () => {
    appendOperator(button.textContent);
  })
);

//DECIMAL BUTTON
decimalButton.addEventListener("click", () => {
  decimal(decimalButton.textContent);
});

//EQUALS BUTTON
equalsButton.addEventListener("click", () => {
  secondOperand = displayValue;
  console.log(`First Operand ${firstOperand}`);
  console.log(`Second Operand ${secondOperand}`);
  console.log(`Operator ${operator}`);
  displayValue = "";
  operate(operator);
  secondOperand = "";
  firstOperand = "";
  console.log();
});

//CLEAR BUTTON
clearButton.addEventListener("click", clear);

//BACKSPACE BUTTON
backSpaceButton.addEventListener("click", () => {
  displayValue = displayValue.slice(0, -1);
  calcDisplay.innerHTML = displayValue;
});

//FUNCTIONS
function appendNumber(number) {
  displayValue += number;
  console.log(displayValue);
  calcDisplay.innerHTML = displayValue;
  return displayValue;
}

function decimal(decimal) {
  if (displayValue.includes(decimal)) {
  } else {
    displayValue += ".";
    calcDisplay.innerHTML = displayValue;
  }
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

function operate(operator) {
  if (operator === "+") {
    calcDisplay.innerHTML = addTotal(
      Number(firstOperand),
      Number(secondOperand)
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
