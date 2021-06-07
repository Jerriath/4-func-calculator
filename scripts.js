function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b; //This function will need some tweeking later (too many decimals)
}

function operate(a, b, func) {
    return func(a, b);
}