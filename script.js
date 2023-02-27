let oldValue = '', newValue = '', operator = '', answer = 0;
let errorLine;

let oldDisplayValue = document.querySelector('.firstLine');
let newDisplayValue = document.querySelector('.secondLine');

let deleteValue = document.querySelector('.deleteValue');

let equal = document.querySelector('.equal');

let resetCalculator = document.querySelector('.resetCalculator');

let numBtn = document.querySelectorAll('.number');

let operators = document.querySelectorAll('.operator');

newDisplayValue.textContent = '0';

numBtn.forEach((btn) => {
    btn.addEventListener("click", (val) =>{
        getValue(val.target.textContent);
    });
});

operators.forEach((btn) =>{
    btn.addEventListener("click", (val) =>{
        handleOperator(val.target.textContent);
    });
});

equal.addEventListener("click", handleEqual);

resetCalculator.addEventListener("click", handleReset);

deleteValue.addEventListener("click", handleDelete);

function handleDelete(){
    if(newValue.length > 0){
        newValue = newValue.slice(0, -1);
        newDisplayValue.textContent = newValue || 0;
    }
}

function getValue(input){
    if(newValue.length <= 12){
        if(newValue.includes('.') && input === '.')
            return;
        else{
            newValue += input;
            newDisplayValue.textContent = newValue;
        }
    }
}

function handleOperator(op){
    if(oldValue !== '' && newValue !== ''){
        errorLine = oldValue + "  " + operator + "  " + newValue + " =";
        calculate();
    }
    else if(oldValue === '' && newValue !== '')
        oldValue = newValue;
    else if(oldValue === '' && newValue === '')
        return
    newValue = '';
    operator = op;
    newDisplayValue.textContent = '';
    oldDisplayValue.textContent = oldValue + '  ' + operator + ' ... ' + "  =";
    if(checkError()){
        handleReset();
        oldDisplayValue.textContent = errorLine;
        newDisplayValue.textContent = 'ERROR';
    }
}

function handleEqual(){
    if(oldValue !== '' && newValue !== ''){
        oldDisplayValue.textContent = oldValue + "  " + operator + "  " + newValue + " =";
        errorLine = oldValue + "  " + operator + "  " + newValue + " =";
        calculate();
        newDisplayValue.textContent = answer;
    }
    if(checkError()){
        handleReset();
        oldDisplayValue.textContent = errorLine;
        newDisplayValue.textContent = 'ERROR';
    }
}

function handleRational(pnt){
    point = pnt;
    newDisplayValue.textContent = newValue + '.';
}

function checkError(){
    if(answer === Infinity){
        return true;
    }
}

function calculate(){
    if(operator === '+')
        answer = add(oldValue, newValue);
    else if(operator === '-')
        answer = subtract(oldValue, newValue);
    else if(operator === '*')
        answer = multiply(oldValue, newValue);
    else if(operator === '/'){
        answer = divide(oldValue, newValue);
    }
    oldValue = answer;
    newValue = '';
}

function add(a, b){
    return Number(a) + Number(b);
}

function subtract(a, b){
    return Number(a) - Number(b);
}

function multiply(a, b){
    return Number(a) * Number(b);
}

function divide(a, b){
    return Number(a) / Number(b);
}

function handleReset(){
    oldDisplayValue.textContent = '';
    newDisplayValue.textContent = '0';
    oldValue = '';
    newValue = '';
    operator = '';
    answer = 0;
}