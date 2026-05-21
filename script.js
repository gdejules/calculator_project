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
let input = "";

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

const numerical = "0123456789";
const operator = ["div", "multiply", "min", "plus"];

// function to update variable value and also display
// let cal = { firstNumber: "", secondNumber: "", operator: "" };

const cal = {
  firstNumber: "",
  secondNumber: "",
  operator: "",
  equal: false,
  result: false,
};

function updateVar(input) {
  switch (true) {
    case numerical.includes(input): {
      if (cal.firstNumber === "" && cal.operator === "") {
        cal.firstNumber += input;
      } else if (cal.firstNumber !== "" && cal.operator === "") {
        cal.firstNumber += input;
      } else if (cal.operator !== "") {
        cal.secondNumber += input;
      }
      break;
    }
    case operator.includes(input): {
      if (cal.firstNumber === "" && cal.secondNumber === "") {
        cal.operator = "";
      } else if (cal.firstNumber !== "" && cal.secondNumber === "") {
        cal.operator = input;
      } else if (cal.firstNumber !== "" && cal.secondNumber !== "") {
        operate(cal.operator, cal.firstNumber, cal.secondNumber);
        cal.firstNumber = result;
        cal.result = true;
        cal.operator = input;
      }
      break;
    }
    case input === "equal": {
      if (cal.firstNumber === "") {
        cal.equal = false;
      } else if (cal.firstNumber !== "" && cal.operator === "") {
        cal.equal = false;
      } else if (cal.firstNumber !== "" && cal.operator !== "") {
        if (cal.secondNumber === "") {
          cal.equal = true;
          cal.result = true;
          cal.secondNumber = cal.firstNumber;
          operate(cal.operator, cal.firstNumber, cal.secondNumber);
          cal.firstNumber = result;
          cal.secondNumber = "";
        } else if (cal.secondNumber !== "") {
          cal.equal = true;
          cal.result = true;
          operate(cal.operator, cal.firstNumber, cal.secondNumber);
          cal.firstNumber = result;
          cal.secondNumber = "";
        }
      }
      break;
    }
  }
  return cal;
}

// initialize buttons DOM
const buttons = document.querySelector("#buttons");

// initialize display DOM
let numDisplay = document.querySelector(".number-display");
numDisplay.textContent = "0";

// buttons event listener to update display and variable
buttons.addEventListener("click", (e) => {
  let target = e.target;

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

  updateVar(input);
  console.log(cal);

  let myEvent = new CustomEvent("update-display", {
    detail: {
      firstNumber: cal.firstNumber,
      secondNumber: cal.secondNumber,
      operator: cal.operator,
      equal: cal.equal,
      result: cal.result,
    },
  });

  numDisplay.dispatchEvent(myEvent);
});

numDisplay.addEventListener("update-display", (e) => {
  let first = e.detail.firstNumber;
  let second = e.detail.secondNumber;
  let operator = e.detail.operator;
  let equal = e.detail.equal;
  let result = e.detail.result;

  if (first === "" && operator === "") {
    numDisplay.textContent = "0";
  } else if (first !== "" && operator === "") {
    numDisplay.textContent = first;
  } else if (first !== "" && operator !== "") {
    if (second === "") {
      numDisplay.textContent = first;
    } else if (second !== "") {
      numDisplay.textContent = second;
    }
  } else if (first !== "" && second !== "") {
    if (equal === false && result === false) {
      numDisplay.textContent = second;
    } else if (equal === false && result === true) {
      numDisplay.textContent = first;
    } else if (equal === true && result === true) {
      numDisplay.textContent = e.detail.firstNumber;
      console.log(first);
    }
  }
});
