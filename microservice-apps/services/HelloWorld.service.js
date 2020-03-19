const { ServiceBroker } = require('moleculer');


//Create Service Broker Object
const broker = new ServiceBroker();

//service definition
broker.createService({
    name: 'HelloWorldService',
    actions: {
        //methods
        sayHello() {
            return 'Hello MicroService';
        }
    }
});
//using promises
// broker.start().then(
//     () => broker.call('HelloWorldService.sayHello')
// )
//     .then(response => console.log(`Got Response ${response}`))
//     .catch(err => console.log(err));

//async --- await
async function startApp() {
    try {
        await broker.start(); // will return promise, without any value
        const response = await broker.call('HelloWorldService.sayHello')
        console.log(`Got Response ${response}`);
    }
    catch (err) {
        console.log(err);
    }
}
startApp();