const fs = require('fs');
const path = require('path');

//const path = "./src/assets/info.txt";
const filePath = path.join(__dirname, "assets/info.txt");
const options = {
    encoding: 'utf-8'
};
//sync read file
//fs.readFileSync(path[, options])
console.log('start')
const data = fs.readFileSync(filePath, options);
console.log(data);
console.log('end');