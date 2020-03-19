
const { ServiceBroker } = require('moleculer');

//Create Service Broker Object
const broker = new ServiceBroker({
    transporter: "nats://localhost:4222"
});

broker.createService({
    name: 'ProductService',
    actions: {

        update: {
            params: {
                product: "object"
            },
            async handler(ctx) {
                //send product to inventory service
                const product = ctx.params.product
                const result = await ctx.call('InventoryService.update', { product });
                return result;
            }
        },
        save: {
            fallback: (ctx, err) => "Cool Thanks for Using our Service!",
            async handler(ctx) {
                const result = await ctx.call('InventoryService.save');
                return  result;
            }
        }
    }
})


broker.start()
broker.repl();