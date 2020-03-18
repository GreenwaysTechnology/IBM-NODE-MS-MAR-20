const EventEmitter = require('events');


//domain object is powered with event emitter pattern
class ProductService extends EventEmitter{
     constructor(){
         super();
         this.on('sold',(product)=>{
             console.log(`Product has been sold`);
         });
     }
     //biz api
     sale(product){
         this.emit('sold',product);
     }
}

module.exports = ProductService;