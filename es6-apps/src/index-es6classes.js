//object creation

//es 5 way : constructors
//using function ; es5

function Employee(id = 1, name = 'subramanian') {

    //instance variables
    this.id = id;//1;
    this.name = name; 'subramanian';
    //instance methods
    this.calculateSalary = function () {
        return 1000;
    };

}
//emp is referenc variable
let emp = null;

emp = new Employee();
//access object properties
console.log(`id ${emp.id} ${emp.name} ${emp.calculateSalary()}`);

//new object 
emp = new Employee();
//state initalization after object creation
emp.id = 90000;
emp.name = 'raj';
console.log(`id ${emp.id} ${emp.name} ${emp.calculateSalary()}`);

emp = new Employee(4444, 'James'); //constructor parameters
//access object properties
console.log(`id ${emp.id} ${emp.name} ${emp.calculateSalary()}`);




//es 6 class 

class Customer {

    constructor(id = 1, name = 'subramanian') {
        //instance variables
        this.id = id;
        this.name = name;
    }

    //instance methods
    calculateInvoice() {
        return 1000;
    };
}
//cust is referenc variable
let cust = null;

cust = new Customer();
//access object properties
console.log(`id ${cust.id} ${cust.name} ${cust.calculateInvoice()}`);

//after object creation
cust.id = 9999;
cust.name = 'ram'
console.log(`id ${cust.id} ${cust.name} ${cust.calculateInvoice()}`);

cust = new Customer(4555,'James');//constructor parameters
//access object properties
console.log(`id ${cust.id} ${cust.name} ${cust.calculateInvoice()}`);


