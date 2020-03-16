//Numbers :

let salary = 1000;
console.log(`Salary ${salary}`);

//numerical computation

let totalSalary = salary *10;
console.log(`totalSalary ${totalSalary}`);

//variable has been declared but no value : undefined
let qty;
console.log(`The Qty ${qty}`)

//computation against.

let price = 1000;

let totalPrice = qty * price;

console.log(`The Total Price ${totalPrice}`)


//type conversion

let x ="10"; //string type but value is number.
//type con
let totalX =  x * 10; //impicit
let totalX1=  parseInt(x) * 10; //explict
console.log(`Total X : ${totalX} ${totalX1}`)

//type convrsion and nan
let y ="$90" // $90 to number =>type conversion failed
let totalY = y * 10;
console.log(`Total Y : ${totalY}`)

// div by 0

let avg=1000/0; //Infinity
console.log(`Avg ${avg}`);

