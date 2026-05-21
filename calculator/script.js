// Variables
let currentNumber = "0";
let previousNumber = "";
let operator = "";

// Elements click
let display = document.getElementById("display");
let expr = document.getElementById("expr");

// Display update 
function updateDisplay() {
    display.innerHTML = currentNumber;
}

// Number button click
function num(n) {
    if (currentNumber === "0") {
        currentNumber = n;
    } else {
        currentNumber = currentNumber + n;
    }
    updateDisplay();
}

// Operator button click
function op(o) {
    previousNumber = currentNumber;
    operator = o;
    expr.innerHTML = currentNumber + " " + o;
    currentNumber = "0";
}

// Equal button click
function eq() {
    let a = Number(previousNumber);
    let b = Number(currentNumber);
    let result = 0;

    if (operator === "+") {
        result = a + b;
    } else if (operator === "−") {
        result = a - b;
} else if (operator === "×") {
        result = a * b;
    } else if (operator === "/") {
        if (b === 0) {
            result = "Error";
        } else {
            result = a / b;
        }
    }

    expr.innerHTML = previousNumber + " " + operator + " " + b + " =";
    currentNumber = String(result);
    updateDisplay();
}

// AC button click
function ac() {
    currentNumber = "0";
    previousNumber = "";
    operator = "";
    expr.innerHTML = "";
    updateDisplay();
}

// Plus/Minus button
function sign() {
    currentNumber = String(Number(currentNumber) * -1);
    updateDisplay();
}

// Percent button
function pct() {
    currentNumber = String(Number(currentNumber) / 100);
    updateDisplay();
}

// Dot button
function dot() {
    if (!currentNumber.includes(".")) {
        currentNumber = currentNumber + ".";
        updateDisplay();
    }
}