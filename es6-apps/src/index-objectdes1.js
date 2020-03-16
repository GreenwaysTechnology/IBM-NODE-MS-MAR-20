//object destrucing

// function printEmployees(emp){
//     //print employee
//  console.log(`Id ${emp.id}`)
//  console.log(`Name ${emp.name}`)
//  console.log(`city ${emp.address.city}`)
//  console.log(`state ${emp.address.state}`)
// }

//way :1
// function printEmployees(emp) {
//     ///object destrucing
//     const { id, name, address } = emp;
//     //print employee
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`city ${address.city}`)
//     console.log(`state ${address.state}`)
// }
//way : 2
// function printEmployees({ id, name, address }) {
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`city ${address.city}`)
//     console.log(`state ${address.state}`)
// }
//way - 3
// const printEmployees = ({ id, name, address }) => {
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`city ${address.city}`)
//     console.log(`state ${address.state}`)
// };
//nested object destrucing
const printEmployees = ({ id, name, address: { city, state } }) => {
    console.log(`Id ${id}`)
    console.log(`Name ${name}`)
    console.log(`city ${city}`)
    console.log(`state ${state}`)
};
let emp = {
    id: 2,
    name: 'x',
    //has-a : nested objects
    address: {
        city: 'coimbatore',
        state: 'TN'
    }
}
printEmployees(emp);

printEmployees({
    id: 2,
    name: 'x',
    //has-a : nested objects
    address: {
        city: 'coimbatore',
        state: 'TN'
    }
});