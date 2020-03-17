// const  result =  require('./mylib')
const { firstname, lastname, city, save, skills } = require('./mylib');
// console.log(result);

// console.log(`First Name ${result.firstname} last Name ${result.lastname}`)
// console.log(`method ${result.save()} `)
// result.skills.forEach(item=>console.log(item));


console.log(`First Name ${firstname} last Name ${lastname} City ${city}`)
console.log(`method ${save()} `)
skills.forEach(item=>console.log(item));