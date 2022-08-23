const KEYS = document.querySelectorAll('[data-action]')
const NUMBERS = document.querySelectorAll('button:not([data-action])')
const DISPLAY = document.querySelector('.Calculator__display')

let operation = '0'
let previousAction = ''

const calculateFinalValue = () => {
    const RESULT = eval(operation)
    operation = RESULT
    DISPLAY.textContent = RESULT
}

const addOperator = (operator) => {
    if (previousAction === 'addOperator') return

    previousAction = 'addOperator'

    if (operator === '×') {
        operator = '*'
    }
    if ((operator === '÷') || (operator === '/')) {
        operator = '/'
    }
    const newOperation = operation + operator
    operation = newOperation

    DISPLAY.textContent = operation
}

const addNumber = (number) => {
    previousAction = 'addNumber'
    const newOperation = operation === '0' ? number : operation + number
    operation = newOperation

    DISPLAY.textContent = operation

}

const reset = () => {
    operation = '0'
    DISPLAY.textContent = operation
}

KEYS.forEach((_currentElement, _currentIndex) => {
    _currentElement.addEventListener('click', () => {

        const action = _currentElement.dataset.action
        let action_operator = _currentElement.textContent

        if (action === 'calculate') {
            calculateFinalValue()

        } else if (action === 'reset') {
            reset()

        } else {
            addOperator(action_operator)
        }
    })

})

NUMBERS.forEach((_currentElement, _currentIndex) => {
    _currentElement.addEventListener('click', (e) => {
        const number = e.target.textContent

        addNumber(number)
    })
})


window.addEventListener("keydown", (event) => {
    if (event.defaultPrevented) {
        return;
    }

        console.log(event.key)

    const numberRegex = /[0-9]/
    const isNumber = numberRegex.test(event.key)

    if (isNumber) {
        const number = event.key
        addNumber(number)
        return
    }

    const actionRegex = /[\(\)\+\-\*\/\.\=]|Enter|Delete/
    const isAction = actionRegex.test(event.key)

    if (isAction || event.key === 'Enter') {
        console.log('caiu aqui >>')

        const action_operator = event.key

        if ((action_operator === '=') || (action_operator === 'Enter')) {
            calculateFinalValue()
            return
        }
        addOperator(action_operator)


    }

    event.preventDefault();
});