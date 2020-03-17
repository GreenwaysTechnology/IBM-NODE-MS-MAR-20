//Promise 

//success : resolve

const getValue = () => {
    return Promise.resolve('I am delayed using promises') // 
    //which returns Promise object with data
};
const getError = () => {
    return Promise.reject('Something went wrong!');
}

//Promise with resolve and reject ; with biz logic
const getUser = () => {
    let user = {
        id: 1,
        name: 'admin',
        password: 'admin'
    };
    //let user = null;
    if (user) {
        return Promise.resolve(user);
    } else {
        return Promise.reject('user not  found!!');
    }
}


console.log('start')
// let p = getValue();
// //how to process result: then
// p.then(value => console.log(value));

// let ep = getError();
// ep.catch(err => console.log(err));
//code refactoring using builder pattern
getValue()
    .then(value => console.log(value))
    .finally(() => console.log('done'));

getError()
    .catch(err => console.log(err))
    .finally(() => console.log('done'));

getUser()
    .then(user => console.log(user))
    .catch(err => console.log(err))
    .finally(() => console.log('user api done'));

console.log('end')