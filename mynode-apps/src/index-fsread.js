const fs = require('fs');

//fs.readFile(path[, options], callback)

const path = "./src/assets/info.txt";
const options = {
    encoding: 'utf-8'
};
console.log('start')
fs.readFile(path, options, function (err, data) {
    if (err) throw err;
    console.log(data);
});
console.log('end');