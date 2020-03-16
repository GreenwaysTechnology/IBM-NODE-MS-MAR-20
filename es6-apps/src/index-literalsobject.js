
//literals objects 

let profile = {
    id: 1,
    name: 'ram'
};
console.log(`${profile.id} ${profile.name}`)
//literals with methods

let component = {
    name: 'ProfileService',
    version: '1.9',
    update: function () {
        return 'update function'
    },
    save() {
        return 'save function'
    }

}
console.log(`${component.name} ${component.version} ${component.update()} ${component.save()}`)
//state manipulation
component.name = 'CustomerService'
console.log(`${component.name} ${component.version} ${component.update()} ${component.save()}`)

//has - a 
let emp = {
    id: 2,
    name: 'x',
    //has-a : nested objects
    address: {
        city: 'coimbatore',
        state: 'TN'
    }
}
console.log(emp.id,emp.address.city)
