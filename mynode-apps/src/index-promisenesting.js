
const getUser = () => {
    let user = {
        id: 1,
        name: 'admin',
        password: 'admin'
    };
    return new Promise((resolve, reject) => {
        if (user) {
            //timer ; callback based
            //timer result wrap inside promise
            setTimeout(() => {
                resolve(user);
            }, 1000);
        } else {
            setTimeout(() => {
                reject('Something went wrong');
            }, 1000);
        }
    });
}


const login = user => {
    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {

            setTimeout(() => {
                resolve('Login success');
            }, 1000);
        } else {
            setTimeout(() => {
                reject('Login failed');
            }, 1000);
        }
    });
}



getUser()
    .then(user =>
        login(user) //output of getuser will be input to login
    )
    .then(loginstatus => console.log(loginstatus))
    .catch(err => console.log(err))
    .finally(() => console.log('user api done'));