// Variables
let displayValue = "";

// DOM references
const display = document.querySelector("#display");
const buttons = document.querySelector(".buttons");
const equal = document.querySelector("#equal");

// Event Listeners
display.addEventListener("input", getDisplayValue);
display.addEventListener("keyup", calculate);
for (let button of buttons.children) {
    if (button.id !== "equal") {
        button.addEventListener("click", buttonHandler);
    }
}
equal.addEventListener("click", calculate);

// Functions
function getDisplayValue(event) {
    displayValue = event.target.value;
}

function calculate(event) {
    if (event.target.id === "equal" || event.key === "Enter") {
        if (/^[0-9\+\-\−\*\/\(\)\.\x20]+$/.test(displayValue)) {
            displayValue = `${eval(displayValue.replace("−", "-"))}`;
            display.value = displayValue;
        }
    }
}

function buttonHandler(event) {
    switch (event.target.id) {
        case "left-parenthesis":
            appendText("(");
            break;
        case "right-parenthesis":
            appendText(")");
            break;
        case "backspace":
            displayText(displayValue.substring(0, displayValue.length - 1));
            break;
        case "divide":
            appendText("/");
            break;
        case "multiply":
            appendText("*");
            break;
        case "clear":
            displayText("");
            break;
        case "one":
        case "two":
        case "three":
        case "four":
        case "five":
        case "six":
        case "seven":
        case "eight":
        case "nine":
        case "zero":
        case "decimal":
        case "add":
        case "subtract":
            appendText(event.target.innerText);
        default:
            break;
    }
}

function appendText(text) {
    displayValue += text;
    display.value = displayValue;
}

function displayText(text) {
    displayValue = text;
    display.value = displayValue;
}
