const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplicationBnt = document.getElementById('multiplication')
const divisionBnt = document.getElementById('division')
let action = '+'

plusBtn.onclick = () => action = '+'

minusBtn.onclick = () => action = '-'

multiplicationBnt.onclick = function () {
    action = '*'
}

divisionBnt.onclick = function () {
    action = '/'
}

function printResult(result) {
    if (result >= 0){
        resultElement.style.color = 'green'
    } else if (result == 'Деление на 0 невозможно! inf'){
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'blue'
    }
    resultElement.textContent = result
}

function computeNumberWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (actionSymbol == '+'){
        return num1 + num2
    } else if (actionSymbol == '-'){
        return num1 - num2
    }
    else if (actionSymbol == '*'){
        return num1 * num2
    }
    else if (actionSymbol == '/'){
        if (num2 === 0){
            return 'Деление на 0 невозможно! inf'
        } else {
            return num1 / num2
        }
    }
}

submitBtn.onclick = function () {
    const result = computeNumberWithAction(input1, input2, action)
    printResult(result)
}


