    const TODOS = require('../mock-data/todo-mock');

    class ToDoService {
        constructor() {

        }
        //sync : convert this as async
        // findAll() {
        //     return TODOS;
        // }
        //findAll async version : callbacks
        // findAll(callback) {
        //     setTimeout(() => {
        //         callback(TODOS)
        //     }, 1000);
        // }
        //Promise powered
        findAll() {
            return new Promise((resolove, reject) => {
                setTimeout(() => {
                    resolove(TODOS)
                }, 1000);
            });

        }
    }
    module.exports = new ToDoService();