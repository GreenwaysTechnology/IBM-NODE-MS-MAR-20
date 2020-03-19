const { ServiceBroker } = require('moleculer');

//Create Service Broker Object
const broker = new ServiceBroker();

//main service
broker.createService({
    name: 'CalculatorService',
    actions: {
        ////verbose pattern
        add: {
            //validation
            params: {
                a: "number", // a must be number
                b: "number"
            },
            //biz logic 
            async handler(ctx) {

                try {
                    const { a, b } = ctx.params;
                    //call method on MathService
                    return await ctx.call('MathService.add', { a, b });
                }
                catch (err) {
                    console.log(err);
                }
            }

        },

        async substract(ctx) {
            const { a, b } = ctx.params;
            //call method on MathService
            const result = await ctx.call('MathService.substract', { a, b });
            return result;
        },
        async multiply(ctx) {
            const { a, b } = ctx.params;
            //call method on MathService
            const result = await ctx.call('MathService.multiply', { a, b });
            return result;
        },
        async div(ctx) {
            const { a, b } = ctx.params;
            //call method on MathService
            const result = await ctx.call('MathService.div', { a, b });
            return result;
        }
    }
});

//service definition
broker.createService({
    name: 'MathService',
    actions: {
        //biz logics
        add(ctx) {
            const { a, b } = ctx.params
            return parseInt(a) + parseInt(b);
        },
        substract(ctx) {
            const { a, b } = ctx.params
            return parseInt(a) - parseInt(b);
        },
        multiply(ctx) {
            const { a, b } = ctx.params
            return parseInt(a) * parseInt(b);
        },
        div(ctx) {
            const { a, b } = ctx.params
            return parseInt(a) / parseInt(b);
        }
    }
});

broker.start()
broker.repl();