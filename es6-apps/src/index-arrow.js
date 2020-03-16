
//function declaration : es 5
// let hai = function () {
//     console.log('Hai')
// };
// hai();

//function declaration in es 6 : arrow function

let hai = () => {
    console.log('Hai')
};
hai();

//if function has only one line of body: drop {}
hai = () => console.log('Hai');
hai();

//args ,parameters : multi parameter with default value

hai = (name = 'foo', message = 'Hello') => console.log(`${name} ${message}`);
hai();
hai('ram', 'hai');

//single arg,parameter , without default value : drop ()
hai = message => console.log(`${message}`);
hai('Hello');
///////////////////////////////////////////////////////////////////////////////

//return simple values
let stockValue = () => {
    return 100;
};
console.log(stockValue());
//only return statmement , no more body. : drop {} and return statement
stockValue = () => 100;
console.log(stockValue());
//multi paratmeter and single return with default args
stockValue = (qty = 1, value = 1) => qty * value;
console.log(stockValue(12, 89));
//single arg , no default value, return the same
stockValue = value => value;
console.log(stockValue(90));
////////////////////////////////////////////////////////////////////////////////

//function as parameter in arrow

let handler = connect => {
    connect();
}
handler(() => console.log('Connector'));

handler = connect => connect();
handler(() => console.log('Connector'));

handler = connect => connect();
let httpConnector = () => console.log('HTTP Connector');
handler(httpConnector);