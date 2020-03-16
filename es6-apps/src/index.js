//built in object

//string
let name = "subramanian".toUpperCase();
console.log(name);

//numbers
let price = 1000.778434;
console.log(price, price.toFixed(2));

//array
let names = ['a', 'b', 'c'];
names.forEach(name => console.log(name));
let employees = [{ id: 1, name: 'A1' }, { id: 2, name: 'A2' }, { id: 3, name: 'A3' }];
employees.forEach(emp => console.log(emp));

///json
const str=JSON.stringify(employees)
console.log(str)
