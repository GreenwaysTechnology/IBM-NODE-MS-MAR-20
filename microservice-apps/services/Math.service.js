const { ServiceBroker } = require('moleculer');


//Create Service Broker Object
const broker = new ServiceBroker();

//service definition
broker.createService({
    name: 'MathService',
    actions: {
        //methods
        add(ctx) {
            const { a, b } = ctx.params
            return parseInt(a) + parseInt(b);
        }
    }
});

async function startApp() {
    try {
        await broker.start(); // will return promise, without any value
        const response = await broker.call('MathService.add', { a: "10", b: 10 })
        console.log(`Got Response ${response}`);
    }
    catch (err) {
        console.log(`Somethng went wrong`, err);
    }
}
startApp();