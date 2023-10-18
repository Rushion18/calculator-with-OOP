class Calculator {
    constructor() {
        this.display = '';
    }

    clearDisplay() {
        this.display = '';
    }

    appendToDisplay(value) {
        this.display += value;
    }

    calculateResult() {
        try {
            this.display = eval(this.display);
        } catch (error) {
            this.display = 'Error';
        }
    }
}

const calculator = new Calculator();

// DOM manipulation functions
function clearDisplay() {
    calculator.clearDisplay();
    updateDisplay();
}

function appendToDisplay(value) {
    calculator.appendToDisplay(value);
    updateDisplay();
}

function calculateResult() {
    calculator.calculateResult();
    updateDisplay();
}

function updateDisplay() {
    const displayElement = document.getElementById('display');
    displayElement.value = calculator.display;
}
