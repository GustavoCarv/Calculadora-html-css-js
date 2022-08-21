const KEYS = document.querySelectorAll('[data-action]')
const NUMBERS = document.querySelectorAll('button:not([data-action])')
const DISPLAY = document.querySelector('.Calculator__display')

let operation = '0'
let previousAction = ''

KEYS.forEach((_currentElement, _currentIndex) => {
    _currentElement.addEventListener('click', () => {

        const ACTION = _currentElement.dataset.action
        let action_operator = _currentElement.textContent

        if (ACTION === 'calculate') {
            const RESULT = eval(operation)
            operation = RESULT
            DISPLAY.textContent = RESULT


        } else if (ACTION === 'reset') {
            operation = '0'
            DISPLAY.textContent = operation
            
        } else {
            if(previousAction === 'addOperator') return

            previousAction = 'addOperator'

            if (action_operator === '×') {
                action_operator = '*'
            }
            if (action_operator === '÷') {
                action_operator = '%'
            }
            const newOperation = operation + action_operator
            operation = newOperation

            DISPLAY.textContent = operation
        }
    })

})

NUMBERS.forEach((_currentElement, _currentIndex) => {
    _currentElement.addEventListener('click', (e) => {
        previousAction = 'addNumber'
        const VALUE = e.target.textContent
        const newOperation = operation === '0' ? VALUE : operation + VALUE
        operation = newOperation

        DISPLAY.textContent = operation


    })
})