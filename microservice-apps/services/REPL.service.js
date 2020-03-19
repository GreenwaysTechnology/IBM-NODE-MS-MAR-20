//REPL.service.js

const { ServiceBroker } = require('moleculer');


//Create Service Broker Object
const broker = new ServiceBroker();

//service definition
broker.createService({
    name: 'REPLService',
    actions: {
        //methods
        sayHello(ctx) {
            const { name } = ctx.params;
            return `Hello ${name}`;
        }
    }
});

broker.start();
broker.repl();