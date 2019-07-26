// Math Functions - working - yay!

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
    if (b === 0) {
        return `Can't divide by 0!`
    }
    return a / b
}

function operate(op, in1, in2) {
    let result
    in1 = in1 * 1
    in2 = in2 * 1
    switch (op) {
        case 'addition':
            result = add(in1, in2)
            break;
        case 'subtract':
            result = subtract(in1, in2)
            break;
        case 'multiply':
            result = multiply(in1, in2)
            break;
        case 'divide':
            result = divide(in1, in2)
            break;
        case 'equal':
            result = displayValue
    }
    console.log(result)
    displayValue = result
    input1 = result
    displayDiv.innerHTML = result
    return result
}

// Button Events and Functions

let displayDiv = document.querySelector('#display')
let displayValue;
let input1;
let input2;
let operator;

let numBtns = document.querySelectorAll('.num')
numBtns.forEach(button => button.addEventListener('click', (e) => {
    if(input1 === undefined) {
        displayValue = displayDiv.innerHTML = displayDiv.innerHTML + e.target.id
        console.log(input1)
    } else if(displayDiv.innerHTML === input1) {
        displayDiv.innerHTML = e.target.id
    } else {
        displayValue = displayDiv.innerHTML = displayDiv.innerHTML + e.target.id
    }   
}))

let clear = document.querySelector('#clear')
clear.addEventListener('click', () => {
    displayValue = ""
    displayDiv.innerHTML = displayValue
    input1 = ""
    input2 = ""
    operator = ""
})

let operatorBtns = document.querySelectorAll('.operator')
operatorBtns.forEach(button => button.addEventListener('click', (e) => {
    operator = e.target.id
    input1 = e.path[1].childNodes[1].innerHTML
    console.log(input1)
    console.log(operator)
}))

let equalBtn = document.querySelector('#equal')
equalBtn.addEventListener('click', (e) => {
    input2 = e.path[1].childNodes[1].innerHTML
    operate(operator, input1, input2)
})



