const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")
const num3 = document.querySelector("#num3")
const num4 = document.querySelector("#num4")
const num5 = document.querySelector("#num5")
const num6 = document.querySelector("#num6")
const num7 = document.querySelector("#num7")
const num8 = document.querySelector("#num8")
const num9 = document.querySelector("#num9")
const add = document.querySelector("#add")
const divide = document.querySelector("#divide")
const substract = document.querySelector("#substract")
const multiply = document.querySelector("#multiply")
const operands = document.querySelector("#operands")
const result = document.querySelector("#result")

let queueOfNums = []

// Operand click events
num1.addEventListener("click", () => {

    if (queueOfNums.length < 2) {

        operands.innerText +=  (" " + parseInt(num1.innerText))

        addToQueueOfNums(num1, queueOfNums)

        console.log(queueOfNums)
    } 
    else {
        throw console.error("The queue is full")
    }

})

num2.addEventListener("click", () => {

    if (queueOfNums.length < 2) {

        operands.innerText +=  (" " + parseInt(num2.innerText))

        addToQueueOfNums(num2, queueOfNums)

        console.log(queueOfNums)
    } 
    else {
        throw console.error("The queue is full")
    }

})

num3.addEventListener("click", () => {

    if (queueOfNums.length < 2) {

        operands.innerText +=  (" " + parseInt(num3.innerText))

        addToQueueOfNums(num3, queueOfNums)

        console.log(queueOfNums)
    } 
    else {
        throw console.error("The queue is full")
    }

})

num4.addEventListener("click", () => {

    if (queueOfNums.length < 2) {

        operands.innerText +=  (" " + parseInt(num4.innerText))

        addToQueueOfNums(num4, queueOfNums)

        console.log(queueOfNums)
    } 
    else {
        throw console.error("The queue is full")
    }

})

num5.addEventListener("click", () => {

    if (queueOfNums.length < 2) {

        operands.innerText +=  (" " + parseInt(num5.innerText))

        addToQueueOfNums(num5, queueOfNums)

        console.log(queueOfNums)
    } 
    else {
        throw console.error("The queue is full")
    }

})

num6.addEventListener("click", () => {

    if (queueOfNums.length < 2) {

        operands.innerText +=  (" " + parseInt(num6.innerText))

        addToQueueOfNums(num6, queueOfNums)

        console.log(queueOfNums)
    } 
    else {
        throw console.error("The queue is full")
    }

})

num7.addEventListener("click", () => {

    if (queueOfNums.length < 2) {

        operands.innerText +=  (" " + parseInt(num7.innerText))

        addToQueueOfNums(num7, queueOfNums)

        console.log(queueOfNums)
    } 
    else {
        throw console.error("The queue is full")
    }

})

num8.addEventListener("click", () => {

    if (queueOfNums.length < 2) {

        operands.innerText +=  (" " + parseInt(num8.innerText))

        addToQueueOfNums(num8, queueOfNums)

        console.log(queueOfNums)
    } 
    else {
        throw console.error("The queue is full")
    }

})

num9.addEventListener("click", () => {

    if (queueOfNums.length < 2) {

        operands.innerText +=  (" " + parseInt(num9.innerText))

        addToQueueOfNums(num9, queueOfNums)

        console.log(queueOfNums)
    } 
    else {
        throw console.error("The queue is full")
    }

})

num0.addEventListener("click", () => {

    if (queueOfNums.length < 2) {

        operands.innerText +=  (" " + parseInt(num0.innerText))

        addToQueueOfNums(num0, queueOfNums)

        console.log(queueOfNums)
    } 
    else {
        throw console.error("The queue is full")
    }

})

// Operator click events
add.addEventListener("click", () => {
    if (queueOfNums.length > 1) {
        applyOperation(add.id, queueOfNums, 0, result, operands)
        queueOfNums = []
    }

    else {
        throw console.error("Not enough operands")
    }
    
})

substract.addEventListener("click", () => {
    if (queueOfNums.length > 1) {
        applyOperation(substract.id, queueOfNums, 0, result, operands)
        queueOfNums = []
    }

    else {
        throw console.error("Not enough operands")
    }
    
})

multiply.addEventListener("click", () => {
    if (queueOfNums.length > 1) {
        applyOperation(multiply.id, queueOfNums, 0, result, operands)
        queueOfNums = []
    }

    else {
        throw console.error("Not enough operands")
    }
    
})

divide.addEventListener("click", () => {
    if (queueOfNums.length > 1) {
        applyOperation(divide.id, queueOfNums, 0, result, operands)
        queueOfNums = []
    }

    else {
        throw console.error("Not enough operands")
    }
    
})

// Operand Functions
function addToQueueOfNums(element, queueOfNums) {

    console.log(parseInt(element.innerText))

    queueOfNums.push(parseInt(element.innerText))

    return queueOfNums
}

// Operator Functions
function applyOperation(expression, queueOfNums, resultOfOperation, resultsDiv, operandsDiv) {
    switch(expression) {
        case "add":
            resultOfOperation = queueOfNums[0] + queueOfNums[1]
            resultsDiv.innerText = ("Result: " + resultOfOperation)
            operandsDiv.innerText = "Operands: "
            return (resultOfOperation)
            break;
    
        case "substract":
            resultOfOperation = queueOfNums[0] - queueOfNums[1]
            resultsDiv.innerText = ("Result: " + resultOfOperation)
            operandsDiv.innerText = "Operands: "
            return (resultOfOperation)
            break;
    
        case "multiply":
            resultOfOperation = queueOfNums[0] * queueOfNums[1]
            resultsDiv.innerText = ("Result: " + resultOfOperation)
            operandsDiv.innerText = "Operands: "
            return (resultOfOperation)
            break;

        case "divide":
            resultOfOperation = queueOfNums[0] / queueOfNums[1]
            resultsDiv.innerText = ("Result: " + resultOfOperation)
            operandsDiv.innerText = "Operands: "
            return (resultOfOperation)
            break;
    
        default:
            console.log(expression)
            console.log(typeof(expression))
            throw console.error("Something went wrong!");          
    }
}