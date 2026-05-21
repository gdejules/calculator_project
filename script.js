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

// input variables initiate as string primarily
// to make it easier for appending number when user click number button,
// but lets try to make it as number right now
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = 0;

// function to trigger operation
function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "plus":
      add(firstNumber, secondNumber);
      break;
    case "min":
      subtract(firstNumber, secondNumber);
      break;
    case "multiply":
      multiply(firstNumber, secondNumber);
      break;
    case "div":
      divide(firstNumber, secondNumber);
      break;
  }
}

// initiate DOM node to display numbers
let numDisplay = document.querySelector(".number-display");
numDisplay.textContent = "0";

// initialize buttons DOM
const buttons = document.querySelector("#buttons");
const buttonsFirstCol = buttons.querySelector(".first-col");
const buttonsSecondCol = buttons.querySelector(".second-col");
const buttonsThirdCol = buttons.querySelector(".third-col");
const buttonsOperators = buttons.querySelector(".operators");

// lets try new approach
// first user will click one of the number buttons to enter number value to calculate

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

  updateVarAndDisplay(input, operator, firstNumber, secondNumber);
});

// function to update variable value and also display
function updateVarAndDisplay(input) {
  const numerical = "0123456789";
  const operation = ["div", "multiply", "min", "plus", "equal"];
  let display = "";
  console.log(input);

  switch (true) {
    case numerical.includes(input): {
      if (firstNumber === "") {
        firstNumber += input;
        display = `${firstNumber}`; // remember to non activate this when working (to check if the above code still runs)
      } else if (operator === "") {
        firstNumber += input;
        display = `${firstNumber}`;
      } else if (result !== 0) {
        firstNumber = input;
        display = `${firstNumber}`;
      } else if (operator !== "") {
        secondNumber += input;
        display = `${secondNumber}`;
      }
      break;
    }
    case operation.includes(input): {
      if (firstNumber === "") {
        operator = "";
        display = `${firstNumber}`;
      } else if (firstNumber !== "") {
        operator = input;
        display = `${firstNumber}`;
      } else if (firstNumber !== "" && secondNumber === "") {
        if (input !== "equal") {
          operator = input;
          display = `${firstNumber}`;
        } else if (input === "equal") {
          operator = "";
          // secondNumber = firstNumber;
          // // this triggers operation function
          // result = operate(operator, firstNumber, secondNumber);
          // display = `${result}`;
        }
      } else if (firstNumber !== "" && secondNumber !== "") {
        if (input !== "equal") {
          result = operate(operator, firstNumber, secondNumber);
          display = `${result}`;
          operator = input;
          firstNumber = result; // to enable chaining operation
          secondNumber = "";
        } else if (input === "equal") {
          operator = input;
          result = operate(operator, firstNumber, secondNumber);
          console.log(result);
          display = `${result}`;
          operator = "";
          firstNumber = result; // to enable chaining operation
          secondNumber = "";
        }
      }
      break;
    }
    case input === "clear": {
      firstNumber = "";
      secondNumber = "";
      operator = "";
      result = 0;
      display = "0";
      break;
    }
  }
  numDisplay.textContent = display;
}

// display will be changed from 0 -> number that user enter,
// if user enter operation or clear or 0 button, the display still show 0
// if user keep clicking number button, it will append the previous number (e.g 4, then 8 will show 48)
// for this we need function to update display

// after that if user click operation button other than equal (=),
// that operation will be used as the calculation
// if user enter another operation button again, the latest will be used for the calculation
// if user click equal (=) button before clicking another number button,
// the second number value will be assumed the same as the first number
// and then the result will be displayed instantly (e.g click 4 and then +, then = will resulted in 8)

// if after clicking operation button user clicking another number
// that number will be second number in the operation

// if after that user click (=), the operation will be run
// if user click another operation number instead, display will show the result first

/*


// function to clear display
function clearDisplay() {
  firstNumber = "0";
  secondNumber = "";
  operator = "";
  result = "";
  numDisplay.textContent = `${firstNumber}`;
}

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
      updateDisplay(firstNumber, secondNumber, operator, result);
      break;
  }
});
*/

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
