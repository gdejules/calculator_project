// operation function
const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

// input variables
let firstNum = document.querySelector(".first");
let operator;
let secondNum;

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
const buttonsThirdCol = buttons.querySelector(".third-col");

buttonsThirdCol.addEventListener("click", (e) => {
  let target = e.target;

  switch (target.id) {
    case "one":
      firstNum.textContent += 1;
      break;
  }
});
