
//function as literal.

//way 1 :
function sayHello() {
    console.log('Hello');
}
let hello = sayHello;//just assign function to a variable
console.log(hello);
//invoke that function
hello();
//way 2:

//anonmous function: function without name;
let hai = function () {
    console.log('Hai')
};
//call hai
hai();
//parameters,args and return ; function literals

//a =x;
//b=y;
let add = function (a = 1, b = 1) {
    return a + b;
};
console.log(add(10, 10));
let x = 10
let y = 90;
console.log(add(x, y));

//passing function as parameter to another function

//connect is variable  //connect=function(){} 
let handler = function (info, connect) {
    let message = connect(info);
    console.log(message);
};
handler('DB Handler', function (message) {
    // console.log(`${message}`)
    return `${message}`;
});

//declare variable
let httpConnector = function (message) {
    // console.log(`${message}`)
    return `${message}`;
};
handler('HTTP handler', httpConnector);
///////////////////////////////////////////////////////////////////////////////

function getValue() {
    return 100;
}
console.log(getValue());

//way 1
// function counter(){

//     function increment(){
//         console.log('Increment')
//     }
//     return increment;
// }

//way 2
// function counter() {
//     return function increment() {
//         console.log('Increment')
//     }
// }

//way 3:
function counter() {
    //nested function
    return function (info) {
        console.log(info)
    }
}
let inc = counter()
console.log(inc)
inc('increment');
counter()('increment');