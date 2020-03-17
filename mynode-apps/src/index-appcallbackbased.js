const { findAll } = require('./services/TODOService');

//front end api

async function getTODOS() {
    // findAll().forEach(todo => {
    //     console.log(`User id : ${todo.userId} `)
    //     console.log(`title : ${todo.title}`);
    //     console.log(`Status : ${todo.completed ? 'Completed' : 'NotCompleted'} `)
    // });
    //callback based api
    // findAll(todos => {
    //     todos.forEach(todo => {
    //         console.log(`User id : ${todo.userId} `)
    //         console.log(`title : ${todo.title}`);
    //         console.log(`Status : ${todo.completed ? 'Completed' : 'NotCompleted'} `)
    //     });
    // });

    try {
        const todos = await findAll();
        todos.forEach(todo => {
            console.log(`User id : ${todo.userId} `)
            console.log(`title : ${todo.title}`);
            console.log(`Status : ${todo.completed ? 'Completed' : 'NotCompleted'} `)
        });
    }
    catch (err) {
        console.log(err);
    }
}
console.log('start')
getTODOS();
console.log('end');