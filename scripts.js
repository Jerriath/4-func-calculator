//Important variables to remember
let aValue = null;
let displayValue = null;
let answer = null;
let memory = null;
let operation = null;
let display = document.querySelector("#output");
let aDisplay = document.querySelector("#aValue");

//Basic 4 functions of calculator
function add(a, b) {
    return parseFloat(a) + parseFloat(b);
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
    fourNodes[i*2 + 1].addEventListener("click", function(e) {
        operation = e.target.id;
        if (aValue == null)
        {
            updateA(displayValue); //Passes previous displayValue to the aValue
            clear(); //Clears the displayValue for a new value (b)
        }
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

//Function to negate the current number in display
const negate = document.querySelector("#signChange");
negate.addEventListener("click", () => {
    displayValue *= -1;
    display.textContent = displayValue;
});

//Function to sqrt the answer (if it exists) or the displayValue
const sqrt = document.querySelector("#sqrt");
sqrt.addEventListener("click", () => {
    if (answer)
    {
        aValue = Math.sqrt(answer);
        updateA(aValue);
    }
    else if (displayValue);
    {
        displayValue = Math.sqrt(displayValue);
        updateA(displayValue);
        clear();
    }
});

//Function to remember value in display and store it in MRC (twice to clear memory)
const mrc = document.querySelector("#mrc");
mrc.addEventListener("click", () => {
    if (displayValue == memory)
    {
        memory = null;
    }
    else
    {
        displayValue = memory;
        display.textContent = displayValue;
    }
});

//Function to remember value in display (or aValue if none in display) and store it into MRC
const mPlus = document.querySelector("#mPlus");
mPlus.addEventListener("click", () => {
    if (aValue && !displayValue)
    {
        if (memory == aValue)
        {
            memory = null;
        }
        else
        {
        memory = aValue;
        }
    }
    else if (displayValue)
    {
        if (memory == displayValue)
        {
            memory == null;
        }
        else
        {
            memory = displayValue;
        }
    }
});

//Function to remove value in memory (similar to double clickling mrc)
const mMinus = document.querySelector("#mMinus");
mMinus.addEventListener("click", () => {
    memory = null;
});

//Function to make value in display a percentage (gives functionaity to percent button)
const percent = document.querySelector("#percent");
percent.addEventListener("click", () => {
    if (operation == "add" || operation == "minus")
    {
        displayValue = displayValue * 0.01;
        displayValue = displayValue * aValue;
    }
    else if (operation == "multiply" || operation == "divide")
    {
        displayValue = displayValue * 0.01;
    }
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
    console.log(childrenNodes[i*2 - 1]);
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
    display.textContent = display.textContent + value;
    displayValue = display.textContent;
}

//Updates the aValue display
function updateA(value) {
    aDisplay.textContent = value;
    aValue = value;
    answer = aValue
}

//Function to clear the display
function clear() {
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