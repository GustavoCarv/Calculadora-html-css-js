const KEYS = document.querySelectorAll('[data-action]')
const NUMBERS = document.querySelectorAll('button:not([data-action])')
const DISPLAY = document.querySelector('.Calculator__display')

/* console.log("Caiu aqui >>>", NUMBERS) */

let operation = '0'

KEYS.forEach((_currentElement, _currentIndex) => {
    _currentElement.addEventListener('click', (e) => {
        const ACTION = _currentElement.dataset.action

        if (ACTION === 'calculate') {
            console.log('Ueeepa')
        }
    })

})

NUMBERS.forEach((_currentElement, _currentIndex) => {
    _currentElement.addEventListener('click', (e) => {
        const VALUE = e.target.textContent
        const newOperation = operation + VALUE
        operation = newOperation

        DISPLAY.textContent = operation


    })
})