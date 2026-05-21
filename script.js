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

// let firstNumber = "";
// let secondNumber = "";
// let operator = "";
let result = 0;
let cal = { firstNumber: "", secondNumber: "", operator: "" };

// function to trigger operation
function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "plus":
      result = add(firstNumber, secondNumber);
      break;
    case "min":
      result = subtract(firstNumber, secondNumber);
      break;
    case "multiply":
      result = multiply(firstNumber, secondNumber);
      break;
    case "div":
      result = divide(firstNumber, secondNumber);
      break;
  }
  return result;
}

// initialize buttons DOM
const buttons = document.querySelector("#buttons");

// buttons event listener to update display and variable
buttons.addEventListener("click", (e) => {
  let target = e.target;
  let input = "";

  switch (target.id) {
    case "clear":
      input = "clear";
      break;
    case "nine":
      input = "9";
      break;
    case "eight":
      input = "8";
      break;
    case "seven":
      input = "7";
      break;
    case "six":
      input = "6";
      break;
    case "five":
      input = "5";
      break;
    case "four":
      input = "4";
      break;
    case "three":
      input = "3";
      break;
    case "two":
      input = "2";
      break;
    case "one":
      input = "1";
      break;
    case "zero":
      input = "0";
      break;
    case "div":
      input = "div";
      break;
    case "multiply":
      input = "multiply";
      break;
    case "min":
      input = "min";
      break;
    case "plus":
      input = "plus";
      break;
    case "equal":
      input = "equal";
      break;
  }
});

let numDisplay = document.querySelector(".number-display");
numDisplay.textContent = "0";

// function to update variable value and also display
