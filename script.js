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
let secondNum = "";
let operator = "";
let input = "";

// initial display
firstNumDisplay.textContent = `${firstNum}`;
operatorDisplay.textContent = `${operator}`;
secondNumDisplay.textContent = `${secondNum}`;

// function to trigger operation
function operate(operator, firstNum, secondNum) {
  let result = "0";
  switch (operator) {
    case "+":
      result = add(firstNum, secondNum);
      firstNumDisplay.textContent = `${result}`;
      operatorDisplay.textContent = "";
      secondNumDisplay.textContent = "";
      break;
    case "−":
      return subtract(firstNum, secondNum);
      break;
    case "×":
      return multiply(firstNum, secondNum);
      break;
    case "÷":
      return divide(firstNum, secondNum);
      break;
  }
}

// function to handle display
function numDisplay(input) {
  if (firstNum == "0") {
    firstNum = input;
  } else if (operator != "") {
    if (secondNum == "") {
      secondNum = input;
    } else {
      secondNum += input;
    }
  } else {
    firstNum += input;
  }
  firstNumDisplay.textContent = `${firstNum}`;
  secondNumDisplay.textContent = `${secondNum}`;
}

// function to clear display
function clearDisplay() {
  firstNum = "0";
  secondNum = "";
  operator = "";
  firstNumDisplay.textContent = `${firstNum}`;
  secondNumDisplay.textContent = `${secondNum}`;
  operatorDisplay.textContent = `${operator}`;
}

// initialize buttons DOM
const buttons = document.querySelector("#buttons");
const buttonsFirstCol = buttons.querySelector(".first-col");
const buttonsSecondCol = buttons.querySelector(".second-col");
const buttonsThirdCol = buttons.querySelector(".third-col");
const buttonsOperators = buttons.querySelector(".operators");

// buttons event listener to update display and variable
buttonsFirstCol.addEventListener("click", (e) => {
  let target = e.target;

  switch (target.id) {
    case "clear":
      clearDisplay();
      break;
    case "seven":
      input = "7";
      numDisplay(input);
      break;
    case "four":
      input = "4";
      numDisplay(input);
      break;
    case "one":
      input = "1";
      numDisplay(input);
      break;
    case "zero":
      input = "0";
      numDisplay(input);
      break;
  }
});

// event listeners to operators buttons
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
      operate(operator, firstNum, secondNum);
      break;
  }
  // operatorDisplay.textContent = `${operator}`;
});

// Make partial function that can be called for various conditions e.g:
// 1. entering number for firstNum variable
// 2. clicking number buttons when two num variables and operators already clicked
// 3. entering number for secondNum variable
// 4. entering zero for the first time

// Tomorrow (21 May)
// 1. Make one number display (no need for secondNumDisplay)
// 2. No need for displaying operator
// 3. Make 2 pair operation at a time (return result when clicking operators after second num input)
