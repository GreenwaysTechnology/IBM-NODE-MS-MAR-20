//write file
const fs = require('fs');
const path = require('path');

//fs.writeFile(file, data[, options], callback)
const filePath = path.join(__dirname, "assets/info_copy.txt");
const options = {
    encoding: 'utf-8'
};
const data = "Hello I am node file !!!!!!";;
fs.writeFile(filePath, data, options, function (err) {
    if (err) throw err;
    console.log(filePath, 'has been written')
});