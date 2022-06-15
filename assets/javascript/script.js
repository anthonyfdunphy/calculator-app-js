const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculatorKeyboard')
const display = calculator.querySelector('.calculatorDisplay')

keys.addEventListener('click', event => {
    if(!event.target.closest('button')) return 

    const key = event.target
    const keyValue = key.textContent

    const displayValue = display.textContent

    /* code for number keys*/
    if(key.dataset.type == 'num'){
        if(displayValue == '0'){
            display.textContent = keyValue
        } else{
            display.textContent = displayValue + keyValue 
        }
    }

    /* code for operator keys*/
    if(key.dataset.type == 'op'){
        calculator.dataset.previousKeyType = 'op'
    }


    

   

    
    
})