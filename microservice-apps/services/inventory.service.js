
const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker({
    transporter: "nats://localhost:4222",
    registry : {
        strategy : "Random"
    }    
});

broker.createService({
    name: 'InventoryService',
    actions: {
        update: {
            async handler(ctx) {
                const { id, name } = ctx.params.product
                return `${id} inventory has been updated from ${this.broker.nodeID} `;
            }
        }
        , save: {
            async handler(ctx) {
                return `save method is called `;
            }
        }
    }
})

broker.start()
broker.repl();