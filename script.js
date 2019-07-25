// Math Functions

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

function operate(operator, input1, input2) {
    switch (operator) {
        case 'add':
            return displayDiv.innerHTML = add(input1, input2)
            break;
        case 'subtract':
            return displayDiv.innerHTML = subtract(input1, input2)
            break;
        case 'multiply':
            return displayDiv.innerHTML = multiply(input1, input2)
            break;
        case 'divide':
            return displayDiv.innerHTML = divide(input1, input2)
            break;
    }
}

// Button Events and Functions

let displayDiv = document.querySelector('#display')
let displayValue; 
let input1;
let input2;
let operator;

let numBtns = document.querySelectorAll('.num')
numBtns.forEach(button => button.addEventListener('click', numToDisplay))

function numToDisplay(e) {
    displayValue = displayDiv.innerHTML = displayDiv.innerHTML + e.target.id 
}

let clear = document.querySelector('#clear')
clear.addEventListener('click', () => {
    displayValue = ""
    displayDiv.innerHTML = displayValue
})

let operatorBtns = document.querySelectorAll('.operator')
operatorBtns.forEach(button => button.addEventListener('click', (e) => {
    operator = e.target.id
    console.log(operator)
    input1 = displayValue
    console.log(input1)
}))


