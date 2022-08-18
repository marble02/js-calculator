let result = 0;
let display = document.querySelector('.display');
let btnsPressed = [];
let firstNum = null;
let lastOperation = null;
let dotPressed = false;

function allClear() {
    display.textContent = '0';
    result = 0;
    btnsPressed = [];
    firstNum = null;
    lastOperation = null;
    enableDot()
}

function disableDot() {
    dotPressed = true;
    document.querySelector('.dot').disabled = true;
}

function enableDot() {
    dotPressed = false;
    document.querySelector('.dot').disabled = false;
}

function getBtnsPressed() {
    return btnsPressed.join('')
}

function clearBtnsPressed() {
    btnsPressed = [];
    enableDot();
}

function collectBtns(e) {
    btnsPressed.push(e.target.textContent);
    if (e.target.textContent == '.') {
        disableDot();
    }
    updateDisplay(true);
}

function updateDisplay(isNum) {
    if (isNum) {
        display.textContent = getBtnsPressed();
    } else {
        display.textContent = result;
    }
}

function doOperation(o, o1, o2) {
    switch (o) {
        case "*":
            result = multiply(parseFloat(o1), parseFloat(o2))
            console.log("doOperation", o1, o, o2, "result", result )
            break
        case "+":
            result = add(parseFloat(o1), parseFloat(o2))
            console.log("doOperation", o1, o, o2, "result", result )
            break
        case "-":
            result = subtract(parseFloat(o1), parseFloat(o2))
            console.log("doOperation", o1, o, o2, "result", result )
            break
        case "/":
            result = divide(parseFloat(o1), parseFloat(o2))
            console.log("doOperation", o1, o, o2, "result", result )
            break
    }
}

function operator(e) {
    let operation = e.target.textContent;
    if (lastOperation == null && firstNum == null & btnsPressed.length > 0) {
        result = getBtnsPressed();
        updateDisplay(false);
    } else {
        doOperation(lastOperation, result, getBtnsPressed());
    }   
    clearBtnsPressed();
    lastOperation = operation;
}

function equals() {
    if (lastOperation != null ) {
        doOperation(lastOperation, result, getBtnsPressed())
        clearBtnsPressed();
        lastOperation = null;
        firstNum = null;
    }
    updateDisplay(false);
    console.log('result', result)
}


function multiply(a, b) {
    return a * b;
}

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function divide(a, b) {
    return a / b
}
