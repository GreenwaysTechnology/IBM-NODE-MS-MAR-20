

// function getEmployee(id,name) {
//     return {
//         id: id,
//         name: name
//     }
// }

// function getEmployee(id,name) {
//     //left : right key : value == make it one
//     return {
//         id,
//         name
//     }
// }
// const getEmployee = (id, name) => {
//     //left : right key : value == make it one
//     return {
//         id,
//         name
//     }
// };
//remove return and {}
const getEmployee = (id, name) => ({
    id,
    name
});

let emp = getEmployee(1, 'James')
console.log(`Id ${emp.id}`)
console.log(`Name ${emp.name}`)
