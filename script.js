// operation function
const add = function (a, b) {
  return Number(a) + Number(b);
};

const subtract = function (a, b) {
  return Number(a) - Number(b);
};

const multiply = function (a, b) {
  return Number(a) * Number(b);
};

const divide = function (a, b) {
  return Number(a) / Number(b);
};

// input variables
let firstNumDisplay = document.querySelector(".first");
let operatorDisplay = document.querySelector(".opr");
let secondNumDisplay = document.querySelector(".second");
let firstNum = "0";
let secondNum = "0";
let operator = "";

// initial display
firstNumDisplay.textContent = `${firstNum}`;

// function to trigger operation
function operate(operator, firstNum, secondNum) {
  switch (operator) {
    case "+":
      return add(firstNum, secondNum);
      break;
    case "-":
      return subtract(firstNum, secondNum);
      break;
    case "*":
      return multiply(firstNum, secondNum);
      break;
    case "/":
      return divide(firstNum, secondNum);
      break;
  }
}

// function to update variable when user input number or operator
const buttons = document.querySelector("#buttons");
// const one = buttons.querySelector(".one");
const buttonsFirstCol = buttons.querySelector(".first-col");
const buttonsSecondCol = buttons.querySelector(".second-col");
const buttonsThirdCol = buttons.querySelector(".third-col");
const buttonsOperators = buttons.querySelector(".operators");

buttonsFirstCol.addEventListener("click", (e) => {
  let target = e.target;

  switch (target.id) {
    case "clear":
      firstNum = "0";
      operator = "";
      secondNum = "";
      break;
    case "seven":
      if (firstNum == "0") {
        firstNum = "7";
      } else {
        firstNum += "7";
      }
      break;
    case "four":
      if (firstNum == "0") {
        firstNum = "4";
      } else {
        firstNum += "4";
      }
      break;
    case "one":
      if (firstNum == "0") {
        firstNum = "1";
      } else {
        firstNum += "1";
      }
      break;
    case "zero":
      if (firstNum == "0") {
        firstNum = "0";
      } else {
        firstNum += "0";
      }
      break;
  }
  firstNumDisplay.textContent = `${firstNum}`;
  return firstNum;
});

buttonsOperators.addEventListener("click", (e) => {
  let target = e.target;

  switch (target.id) {
    case "div":
      operator = "÷";
      operatorDisplay.textContent = `${operator}`;
      break;
    case "multiply":
      operator = "×";
      operatorDisplay.textContent = `${operator}`;
      break;
    case "min":
      operator = "−";
      operatorDisplay.textContent = `${operator}`;
      break;
    case "plus":
      operator = "+";
      operatorDisplay.textContent = `${operator}`;
      break;
    case "equal":
      if (operator == "÷") {
        divide(firstNum, secondNum);
      }
  }
});
