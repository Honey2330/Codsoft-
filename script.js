let display = document.getElementById('display');
let currentInput = '';
let currentOperation = null;

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperation(operation) {
    if (currentInput !== '') {
        currentInput += ' ' + operation + ' ';
        display.value = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(currentInput);
        currentInput = display.value;
    } catch (e) {
        display.value = 'Error';
        currentInput = '';
    }
}
