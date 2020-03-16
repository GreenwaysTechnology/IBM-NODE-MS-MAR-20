//functions

//declaring function.

function sayHello() {
    console.log('Hello')
}
//function invocation
sayHello();

//parameters and args

//a and b are args
function add(a, b) {
    let result = a + b;
    console.log(`add result is ${result}`);
}
//10 ,10 are parameters
add(10, 10);

//default args : es 6 feature
function multiply(a = 1, b = 1) {
    let result = a * b;
    console.log(`multiply result is ${result}`);
}
multiply(19, 10)
multiply();//

//var args
// function logger() {
//     //es 5 syntax
//     console.log(arguments)
// }

//es 6 syntax : rest operator
function logger(...args) {
    console.log(args);
}
logger('Hi', 'hello', 'welcome');
logger('Hi');
logger('Hi', 'hello');

//how to return value
function getStockValue(){
    return 100
}
console.log(getStockValue());

function getStatus(){
    return; //undefined
}
getStatus() ? console.log('Yes') : console.log('No');