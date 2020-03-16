//object augmentation

function Employee(){
    this.id=1;
}
let emp = new Employee();

//add new property after object creation : outside
emp.name ='subramanian'
console.log(emp)

//empty object
let cust = {};
cust.name ='ram';
cust.city = 'coimbatore'

//update 
cust.name = 'raja'

delete cust.name;

console.log(cust);

