const { ServiceBroker } = require('moleculer');


//Create Service Broker Object
const broker = new ServiceBroker();

broker.createService({
    name: 'GreeterService',
    actions: {
        //methods
        sayHello(context) {
            // console.log(context)
            const name = context.params.name;
            return `Hello ${name}`;
        },
        sayHai(ctx) {
            // const firstName = ctx.params.firstName;
            // const lastName = ctx.params.lastName;
            const { firstName, lastName } = ctx.params;
            return `Hai ${firstName} ${lastName}`;
        },
        sayWelcome(ctx) {
            const { message,toWhom } = ctx.params.info
            return `${message} ${toWhom}`;
        }
    }
});

async function startApp() {
    try {
        await broker.start(); // will return promise, without any value
        const helloResponse = await broker.call('GreeterService.sayHello', { name: 'Subramanian' })
        const haiResponse = await broker.call('GreeterService.sayHai', { firstName: 'Divya Sree', lastName: 'Subramanian' })
        const welcomeResponse = await broker.call('GreeterService.sayWelcome', { info: { message: 'Welcome', toWhom: 'Subramanian' } })
        console.log(`Got Response ${helloResponse} ${haiResponse} ${welcomeResponse} `);
    }
    catch (err) {
        console.log(err);
    }
}
startApp();