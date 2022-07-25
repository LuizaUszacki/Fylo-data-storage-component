const BUTTONS = document.querySelectorAll('.btn-input')
const INPUTS = document.querySelectorAll('input')

BUTTONS.forEach(button => {
    button.addEventListener('click', (clickedBtn) => {
        let buttonType = clickedBtn.target.getAttribute('data-type')
        for (let input of INPUTS) {
            let inputType = input.getAttribute('data-type')
            if (inputType === buttonType) {
                input.click()
            }
        }      
    })
})