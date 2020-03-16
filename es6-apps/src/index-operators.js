//operators

//==
let x = 10;
let y = 10;
if (x == y) {
    console.log('X and Y are equal')
} else {
    console.log('X AND Y not equal')
}

let a = "10"; //string
let b = 10; //number
if (a === b) { // string == number
    console.log('A and B are equal')
} else {
    console.log('A AND B not equal')
}

//invertor : true --false; false--true !


let token = '1234'; //true
let isTokenAvailable = !token; //!true =>false
let isNewTokenAvailable = !!token; // !!false =>false !!true=>true
console.log(`isTokenAvailable ${isTokenAvailable}`)
console.log(`isTokenAvailable ${isNewTokenAvailable}`)

// || operator

let isActive = true;
let isEnabled = false;

if (isActive || isEnabled) {
    console.log('pass')
} else {
    console.log('fail')
}


let low = 0 ;
let high = 106;

//if first operand(low) is truthy,the result would be first operand, 
//else second operand
let result = low || high;
console.log(result)