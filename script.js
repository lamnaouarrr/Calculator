function add(array){
    return array.reduce((num, arg) =>  num + Number(arg), 0);
}
function subtract(array){
    return array.reduce((num, arg) =>  num - Number(arg), 0);
}
function multiply(array){
    return array.reduce((num, arg) =>  num * Number(arg), 1);
}
function divide(array){
    return array.reduce((num, arg) =>  num / Number(arg), 1);
}
let array = [];
for(let i = 0; i < 2;i++){
    array.push(prompt("give a numbers"));
}
document.querySelector('.add').textContent = add(array);