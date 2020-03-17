//Async programming using timers and callbacks

console.log('start') ;//sync 
console.log('going');//sync

//settimeout--stack--|dont create frame---libuv|control transfered to 
            // v8------os--running -- once timeout--signal(event) is given
            // to libuv---stores handler function as message in the event
            //queue---loop keeps on checking stack is empty, if yes , then
            //pick callback from event queue and then push into stack,result will be
            //returned
setTimeout(function(){ //async flow
    console.log('i am called delayed manner');
},1000);
console.log('end')
