# Calculator

Calculator icon source : https://fontawesome.com/icons/calculator?s=solid&f=classic


let oldValue = '', newValue = '', midValue ='', operator = '', answer = '', numbs = [],  ans = [];

let oldDisplayValue = document.querySelector('.firstLine');
let newDisplayValue = document.querySelector('.secondLine');

let dDelete = document.querySelector('.dDelete');

let equal = document.querySelector('.equal');

let deci = document.querySelector('.deci');

let rReset = document.querySelector('.rReset');

let numBtn = document.querySelectorAll('.number');

let operators = document.querySelectorAll('.operator');


numBtn.forEach((btn) => {
    btn.addEventListener("click", (val) =>{
        getValue(val.target.textContent);
    });
});

operators.forEach((btn) =>{
    btn.addEventListener("click", (val) =>{
        getOp(val.target.textContent);
    });
});

equal.addEventListener("click", calculate);

function getValue(num){
    if (newValue.length <= 12){
        newValue += num;
        newDisplayValue.textContent = newValue;
    }
}

function getOp(op){
    numbs.push(Number(newValue));
    operator = op;
    oldValue = add(numbs);
    oldDisplayValue.textContent = operator + " " + oldValue;
    newValue = '';
    newDisplayValue.textContent = '';
}

function add(){
    return numbs.reduce((num, arg) => num + arg, 0);
    
}

function calculate(){
    answer = Number(answer);
    if(operator === "+"){
        answer = add(newValue, oldValue);
        ans.push(add());
        answer = ans.slice(-1);
        numbs = [];
    }
    // else if(operator === "-")
    //     answer = oldValue - newValue;
    // else if(operator === "*")
    //     answer = oldValue * newValue;
    // else if(operator === "/")
    //     answer = oldValue / newValue;
    oldDisplayValue.textContent = newValue + " " + operator + " " + oldValue + " =";
    newDisplayValue.textContent = answer;
    oldValue = answer;
    newValue = '';
}
