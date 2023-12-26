let output = '';
let isAddingMode = false;
const display = document.getElementById('display');





function clearDisplay() {
  output = '';
  updateDisplay();
}

function deleteLast() {
  output = output.slice(0, -1);
  updateDisplay();
}

function appendNumber(number) {
  output += number;
  updateDisplay();
  isAddingMode = false;
}

function appendOperator(operator) {
  if (!isAddingMode && output !== '' && !isOperator(output.slice(-1))) {
    output += operator;
    updateDisplay();
    isAddingMode = true;
  } else if (isAddingMode && isOperator(output.slice(-1))) {
    output = output.slice(0, -1) + operator;
    updateDisplay();
  }
}

function appendDecimalPoint() {
  const lastNumber = getLastNumber();
  if (!lastNumber.includes('.')) {
    output += '.';
    updateDisplay();
  }
}

function calculateResult() {
  try {
    output = eval(output).toString();
    if (isNaN(output)) {
      output = 'Not a Number';
    }
    updateDisplay();
    isAddingMode = false;
  } catch (error) {
    output = 'Error';
    updateDisplay();
  }
}

function handlePercentage() {
  output = (parseFloat(output) / 100).toString();
  updateDisplay();
}

function updateDisplay() {
  display.value = output;
}

function getLastNumber() {
  const numbers = output.split(/[\+\-\*\/]/);
  return numbers[numbers.length - 1];
}

function isOperator(char) {
  const operators = ['+', '-', '*', '/'];
  return operators.includes(char);
}

document.addEventListener('keydown', function (event) {
  const key = event.key;

  if (key >= '0' && key <= '9') {
    appendNumber(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    appendOperator(key);
  } else if (key === '.') {
    appendDecimalPoint();
  } else if (key === 'Enter') {
    calculateResult();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});

function appendNumber(number) {
  if (output === '0') {
    output = number;
  } else {
    if (output.includes('.') && output.split('.')[1].length === 1) {
      output = output.slice(0, -1) + number;
    } else {
      output += number;
    }
  }
  updateDisplay();
  isAddingMode = false;
}
function appendNumber(number) {
  if (output === '00') {
    output = number;
  } else {
    if (output.includes('.') && output.split('.')[1].length === 1) {
      output = output.slice(0, -1) + number;
    } else {
      output += number;
    }
  }
  updateDisplay();
  isAddingMode = false;
}



