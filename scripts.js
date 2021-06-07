//Basic 4 functions of calculator
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

//Function to actually calculate something
function operate(a, b, func) {
    return func(a, b);
}

//Places eventListener on all digits
const digitDiv = document.querySelector("#digitDiv");
const childrenNodes = digitDiv.childNodes;
const listLength = childrenNodes.length;
for (let i = 1; i < listLength/2; i++) {
    childrenNodes[i*2 - 1].addEventListener("click", function(e) {
        if (e.target.id == "c") {
            clear()
        }
        else{
            console.log(e.target.id);
            let input = e.target.id;
            enterValue(input);
        }
    });
}

//Function to input number values into calculator
function enterValue(value) {
    let display = document.querySelector("#output");
    display.textContent = display.textContent + value;
    
}

//Function to clear the display
function clear() {
    let display = document.querySelector("#output");
    display.textContent = "";
}