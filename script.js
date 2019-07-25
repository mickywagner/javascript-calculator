function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if(b === 0) {
        return `Can't divide by 0!`
    }
    return a / b
}

function operate(operator, num1, num2) {
    // calls one of the above functions on numbers
}

let displayDiv = document.querySelector('#display')
let displayValue; 

let numBtns = document.querySelectorAll('.num')
numBtns.forEach(button => button.addEventListener('click', numToDisplay))

function numToDisplay(e) {
    displayValue = displayDiv.innerHTML = displayDiv.innerHTML + e.target.id
}
