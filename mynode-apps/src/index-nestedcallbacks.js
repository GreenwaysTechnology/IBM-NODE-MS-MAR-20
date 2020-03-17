//nested callback

const getUser = (resolve, reject) => {
    let fakeUser = {
        id: 1,
        name: 'adminxxx'
    };
    if (fakeUser) {
        setTimeout(() => {
            resolve(fakeUser)
        }, 1000);
    } else {
        setTimeout(() => {
            reject({ code: 500, message: 'User not found!' })
        }, 1000);
    }

}

const login = (user, resolve, reject) => {

    if (user.name === 'admin') {
        setTimeout(() => {
            resolve({ message: 'login success' })
        }, 1000);
    } else {
        setTimeout(() => {
            reject({ code: 500, message: 'Login failed!' })
        }, 1000);
    }

}

getUser(user => {
    login(user,
        status => console.log(status),
        err => console.log(err)
    );
}, err => console.log(err));