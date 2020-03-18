const EventEmitter = require('events');
const ProductService = require('./services/ProductService');

//create Object for event emitter
const eventEmitter = new EventEmitter();

//subscriber
eventEmitter.on('hello', function (data) {
    console.log(`${data}`);
});

//publisher
eventEmitter.emit('hello', 'Hello How are you!');
eventEmitter.emit('hello', 'Wow!..');

//sale 
let pService = new ProductService();
pService.sale({ id: 1, name: 'Phone' });

