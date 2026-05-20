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
let firstNumber = "0";
let secondNumber = "";
let operator = "";
let input = "";
let result = "";

// initiate DOM node to display numbers
let numDisplay = document.querySelector(".number-display");
numDisplay.textContent = `${firstNumber}`;

// function to trigger operation
function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      result = add(firstNumber, secondNumber);
      break;
    case "−":
      result = subtract(firstNumber, secondNumber);
      break;
    case "×":
      result = multiply(firstNumber, secondNumber);
      break;
    case "÷":
      result = divide(firstNumber, secondNumber);
      break;
  }
  firstNumber = result;
  secondNumber = "";
  return result;
  // numDisplay.textContent = `${firstNumber}`;
}

// function to handle display
function updateDisplay(input, result) {
  if (firstNumber == "0") {
    firstNumber = input;
    numDisplay.textContent = `${firstNumber}`;
  } else if (operator != "" || result != "") {
    if (secondNumber == "") {
      secondNumber = input;
      numDisplay.textContent = `${secondNumber}`;
    } else {
      secondNumber += input;
      numDisplay.textContent = `${secondNumber}`;
    }
  } else {
    firstNumber += input;
    numDisplay.textContent = `${firstNumber}`;
  }
}

// function to clear display
function clearDisplay() {
  firstNumber = "0";
  secondNumber = "";
  operator = "";
  result = "";
  numDisplay.textContent = `${firstNumber}`;
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
      updateDisplay(input);
      break;
    case "four":
      input = "4";
      updateDisplay(input);
      break;
    case "one":
      input = "1";
      updateDisplay(input);
      break;
    case "zero":
      input = "0";
      updateDisplay(input);
      break;
  }
});

// event listeners for operators buttons
buttonsOperators.addEventListener("click", (e) => {
  let target = e.target;

  switch (target.id) {
    case "div":
      operator = "÷";
      break;
    case "multiply":
      operator = "×";
      break;
    case "min":
      operator = "−";
      break;
    case "plus":
      operator = "+";
      break;
    case "equal":
      operate(operator, firstNumber, secondNumber);
      updateDisplay();
      break;
  }
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

// Discard display to show operator input
// let operatorDisplay = document.querySelector(".opr");
// let secondNumDisplay = document.querySelector(".second");
// operatorDisplay.textContent = `${operator}`;
// secondNumDisplay.textContent = `${secondNum}`;
