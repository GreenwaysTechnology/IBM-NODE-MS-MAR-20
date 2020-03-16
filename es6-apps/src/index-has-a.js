

class Product {
    constructor(id = 1, qty = 1, price = 1.8, name = 'foo') {
        this.id = id;
        this.qty = qty;
        this.price = price;
        this.name = name;
    }
}
class Order {
    constructor(orderid = 'A001', product = new Product()) {
        this.orderid = orderid;
        //has-a 
        this.product = product; //has-a
    }
}
let product = new Product();
let order = null;

order = new Order('A003', product);
console.log(order);

order = new Order('A004', new Product(7, 100, 890, 'Bar'))
console.log(order);

