

// function sayGreet(callback) {
//     //bind callback with time
//     setTimeout(callback, 1000);
// }
const sayGreet = callback => setTimeout(callback, 1000);

console.log('start')
// sayGreet(function () {
//     console.log('Hello i am delayed')
// });
sayGreet(() => console.log('Hello i am delayed'));
console.log('end');

/////////////////////////////////////////////////////////////////////////////////
//What if i want to return data after sometime: async data return.

const getData = callback => {
    const fakeData = {
        id: 1,
        name: 'subramanian'
    }
    setTimeout(() => {
        callback(fakeData);
    }, 1500);
};
getData(data => console.log(data));
///////////////////////////////////////////////////////////////////////////////

//what if i want to return some data every 1ms ; async data return

const getStockValues = callback => {
    let i = 0;
    let timerId = setInterval(() => {
        i = i + 1;
        callback(i);
    }, 1000);

    //stop timer after 5000ms
    setTimeout(() => {
        console.log('value emitsion has been stoped!');
        clearInterval(timerId);
    }, 10000);

}
getStockValues(i => console.log(i));