let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operation = null;

function appendNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
}

function setOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculateResult();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculateResult() {
    if (currentNumber === '' || previousNumber === '' || operation === null) return;
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentNumber = result.toString();
    operation = null;
    previousNumber = '';
    display.value = currentNumber;
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    display.value = '';
}