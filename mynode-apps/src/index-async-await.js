

function getUser() {
    let user = {
        id: 2,
        name: 'admin'

    }
    if (user) {
        return Promise.resolve(user)
    }
    else {
        return Promise.reject('User not found')
    }
}

function login(user) {
    if (user.name === 'admin') {
        return Promise.resolve('Login success')
    }
    else {
        return Promise.reject('Login failed')
    }
}

//old promise style
// function fetch() {
//     getUser().then(value => console.log(value));
// }
//async await style
async function fetch() {
    try {
        const user = await getUser();
        const status = await login(user);
        console.log(`${user.name} ${status}`);
    }
    catch (err) {
        console.log(err)
    }
}
fetch();