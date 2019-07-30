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
        return `One does not simply divide by zero!`
    }
    return a / b
}

function operate(op, in1, in2) {
    let result
    in1 *= 1
    in2 *= 1
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
    if(typeof(result) === 'number') {
        displayValue = Math.round(1000*result)/10000;
        displayDiv.innerHTML = Math.round(1000*result)/10000;
        return result
    } else {
        displayValue = result
        displayDiv.innerHTML = result
        return result
    }
    console.log("math func: " + input1 + " " + input2 + " " + operator)
}

// Button Events and Functions

let displayDiv = document.querySelector('#display')
let displayValue;
let input1;
let input2;
let operator;
console.log("Start : " + operator, input1, input2)

let MAXLENGTH = 15

function checkLength() {
    if(displayDiv.innerHTML.length > MAXLENGTH) {
        displayDiv.innerHTML = displayDiv.innerHTML.slice(0, displayDiv.innerHTML.length -1)
    }}

let clear = document.querySelector('#clear')
clear.addEventListener('click',  clearCalc)

function clearCalc() {
    displayValue = ""
    displayDiv.innerHTML = displayValue
    input1 = undefined
    input2 = undefined
    operator = undefined
    console.log("Clear : " + operator, input1, input2)
    if(dot.disabled === true) {
        dot.disabled = false
    }
}

let numBtns = document.querySelectorAll('.num')
numBtns.forEach(button => button.addEventListener('click', (e) => {
    if(input1 === undefined) {
        displayValue = displayDiv.innerHTML = displayDiv.innerHTML + e.target.id
    } else if(displayDiv.innerHTML === input1) {
        displayDiv.innerHTML = e.target.id
    } else {
        displayValue = displayDiv.innerHTML = displayDiv.innerHTML + e.target.id
    }
    checkLength()
}))

let operatorBtns = document.querySelectorAll('.operator')
operatorBtns.forEach(button => button.addEventListener('click', (e) => {
    console.log("Operator: " + input1 + " " + input2 + " " + operator)
    if(operator !== undefined && input1 !== undefined) {
        input2 = e.path[1].childNodes[1].innerHTML
        operate(operator, input1, input2)
    }
    
    operator = e.target.id
    input1 = e.path[1].childNodes[1].innerHTML
    
    if(dot.disabled === true) {
        dot.disabled = false
    }
    
    if(equalBtn.disabled === true) {
        equalBtn.disabled = false
    }
}))

let equalBtn = document.querySelector('#equal')
equalBtn.addEventListener('click', (e) => {
    input2 = e.path[1].childNodes[1].innerHTML
    console.log("EqualBtn: " + input1 + " " + input2 + " " + operator)
    operate(operator, input1, input2)
    if(equalBtn.disabled === false) {
        equalBtn.disabled = true
    }
    operator = undefined
})


let dot = document.querySelector('#dot')
dot.addEventListener('click', (e) => {
    dot.disabled = true;
    if(input1 === undefined) {
        displayValue = displayDiv.innerHTML = displayDiv.innerHTML + e.target.innerHTML
    } else if(displayDiv.innerHTML === input1) {
        displayDiv.innerHTML = e.target.innerHTML
    } else {
        displayValue = displayDiv.innerHTML = displayDiv.innerHTML + e.target.innerHTML
    } 
})

let backSpace = document.querySelector('#backspace')
backSpace.addEventListener('click', () => {
    displayDiv.innerHTML = displayDiv.innerHTML.slice(0, displayDiv.innerHTML.length - 1)
})

let plusMinus = document.querySelector('#plusMinus')
plusMinus.addEventListener('click', () => {   
    displayDiv.innerHTML = displayDiv.innerHTML * -1
})

let percent = document.querySelector('#percent') 
percent.addEventListener('click', () => {
    displayDiv.innerHTML = displayDiv.innerHTML / 100
})



