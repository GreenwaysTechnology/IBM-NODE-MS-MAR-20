
//simple async function : by default async funciton return Promise

async function getValue() {
    return 100;  // Promise.resolve(100);
}
async function getError() {
    return Promise.reject('error')
}
async function getUser() {
    let user = {
        id: 1,
        name: 'admin',
        password: 'admin'
    };
    //let user = null;
    if (user) {
        return user;
    } else {
        return Promise.reject('user not  found!!');
    }
}
getValue()
    .then(user => console.log(user))
    .catch(err => console.log(err))
    .finally(() => console.log('value done'));

getError()
    .catch(err => console.log(err))
    .finally(() => console.log('error done'));

getUser()
    .then(user => console.log(user))
    .catch(err => console.log(err))
    .finally(() => console.log('user api done'));
