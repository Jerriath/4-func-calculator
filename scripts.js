//Important variables to remember
let aValue = null;
let displayValue = null;
let answer = null;
let memory = null;
let operation = null;

//Basic 4 functions of calculator
function add(a, b) {
    return parseInt(a) + parseInt(b);
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

//Adding event listeners to four function buttons
const fourFunctions = document.querySelector("#fourFunctions");
const fourNodes = fourFunctions.childNodes;
const fourLength = fourNodes.length;
for (let i = 0; i < fourLength/2 - 2; i++) {
    console.log(fourNodes[i*2 + 1]);
    fourNodes[i*2 + 1].addEventListener("click", function(e) {
        operation = e.target.id;
        updateA(displayValue); //Passes previous displayValue to the aValue
        clear(); //Clears the displayValue for a new value (b)
    });
}

//Adding event listener to enter
const enter = document.querySelector("#enter");
enter.addEventListener("click", () => {
    let a = aValue;
    let b = displayValue;
    if (operation == "multiply")
    {
        answer = operate(a, b, multiply);
    }
    else if (operation == "divide")
    {
        answer = operate(a, b, divide);
    }
    else if (operation == "subtract")
    {
        answer = operate(a, b, subtract);
    }
    else if (operation == "add")
    {
        answer = operate(a, b, add);
    }
    updateA(answer);
    clear();
});



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
            enterValue(input); //Passes the inputed value to the displayValue
        }
    });
}

//Function to input number values into the display
function enterValue(value) {
    let display = document.querySelector("#output");
    display.textContent = display.textContent + value;
    displayValue = display.textContent;
}

//Updates the aValue display
function updateA(value) {
    let aDisplay = document.querySelector("#aValue");
    aDisplay.textContent = value;
    aValue = value;
}

//Function to clear the display
function clear() {
    let display = document.querySelector("#output");
    display.textContent = "";
    if (displayValue == null) //Clears everything if there is no displayValue (ac)
    {
        aValue = null;
        bValue = null;
        answer = null;
        updateA(aValue);
    }
    displayValue = null;
}