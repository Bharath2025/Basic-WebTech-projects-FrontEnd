class Calculator{
    constructor(previousOperandText,currentOperandText){
        this.currentOperandText=currentOperandText;
        this.previousOperandText=previousOperandText;
        this.clear();
    }

    // clear function to clear the text.
    clear()
    {
        this.currentOperand ='';
        this.previousOperand ='';
        this.operation = undefined;
    }

    // delete function to delete the single number.
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    // Function to append the numbers to the display.
    append(number)
    {
        // checking the case for the decimals if already one decimal is present then it wont append to the number eventhough the user enters multiple decimals.
        if(number === '.' && this.currentOperand.includes('.')){
            return;  
        }
        this.currentOperand = this.currentOperand + number.toString();
    }

    // appends the operation to the dispaly
    chooseOperation(operation){
        //condition for multiple operator clicks without input.
        if(this.currentOperand === ''){ return;}
        //handling the computations directly ie calling the compute() when the user clicks the new operator again having one computation waiting in the previous operand.
        if(this.previousOperand !== '')
        {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    //to compute all the operations of calculator.
    compute(){
        let result;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        // console.log(this.previousOperand);
        // console.log(prev,current);
        let choice = this.operation;
        switch(choice){
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case 'x':
                result = prev * current;
                break;
            case '÷':
                result = prev / current;
                break     ;    
            default:
                return;
        }
        this.currentOperand = result;
        this.operation = undefined;
        this.previousOperand = '';
    }

    // to update the display
    updateDisplay()
    {
        this.currentOperandText.innerText = this.currentOperand;
        if(this.operation != null){
            this.previousOperandText.innerText = `${this.previousOperand} ${this.operation}`;   // concatinating the operation to the previousOperand in display.Which happens when the user clicks the new operator again having one computation waiting in the previous operand.
            console.log(this.previousOperandText.innerText);
        }
        else{
            this.previousOperandText.innerText = this.previousOperand;
        }
        
    }

}

const operationButtons = document.querySelectorAll('[data-operation]');
const numberButtons = document.querySelectorAll('[data-number]');
const clearButton = document.querySelector('[data-clear]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const previousOperandText = document.querySelector('[data-previous-operand]');
const currentOperandText = document.querySelector('[data-current-operand]');

//console.log(currentOperandText);
//console.log(clearButton);

var calculator=new Calculator(previousOperandText,currentOperandText);


// adding the eventListeners for all the numberButtons
numberButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        calculator.append(button.innerText);
        calculator.updateDisplay();
        playSound();
    })
})

// adding the eventListeners for all the operationButtons
operationButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
        playSound();
    })
})

//adding the eventListener for the equalButton
equalButton.addEventListener('click',()=>{
    calculator.compute();
    calculator.updateDisplay();
    playSound();
})


//clear Button to clear the display;
clearButton.addEventListener('click',()=>{
    calculator.clear();
    calculator.updateDisplay();
    playSound();
})

deleteButton.addEventListener('click',()=>{
    calculator.delete();
    calculator.updateDisplay();
    playSound();
})


/* Adding clicking sound to the buttons */
function playSound()
{
    const clickSound = new Audio('click_sound.wav');
    clickSound.play();
}


