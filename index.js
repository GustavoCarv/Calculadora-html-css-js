const KEYS = document.querySelectorAll('[data-action]')
const NUMBERS = document.querySelectorAll('button:not([data-action])')
const DISPLAY = document.querySelector('.Calculator__display')



let operation = '0'
KEYS.forEach((_currentElement, _currentIndex) => {
    _currentElement.addEventListener('click', (e) => {

        const ACTION = _currentElement.dataset.action
        let ACTION_OPERATOR = _currentElement.textContent

        if (ACTION === 'calculate') {
            const RESULT = eval(operation)
            operation = RESULT
            DISPLAY.textContent = RESULT


        } else if (ACTION === 'reset') {
            operation = '0'
            DISPLAY.textContent = operation
        } else {
            console.log(ACTION_OPERATOR)
            if (ACTION_OPERATOR === '×') {
                ACTION_OPERATOR = '*'
            }
            if (ACTION_OPERATOR === '÷') {
                ACTION_OPERATOR = '%'
            }
            const newOperation = operation + ACTION_OPERATOR
            operation = newOperation

            DISPLAY.textContent = operation
        }
    })

})

NUMBERS.forEach((_currentElement, _currentIndex) => {
    _currentElement.addEventListener('click', (e) => {
        const VALUE = e.target.textContent
        const newOperation = operation === '0' ? VALUE : operation + VALUE
        operation = newOperation

        DISPLAY.textContent = operation


    })
})