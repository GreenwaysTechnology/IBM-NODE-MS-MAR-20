const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, 'assets/grains.txt');
const config = {
    encoding: 'utf8',
    flag: 'w'
};
//data
const grains = ['wheat', 'rice', 'oats'];

const outputStream = fs.createWriteStream(fileName, config);

while (grains.length) {
    let data = grains.pop() + " ";
    outputStream.write(data);
    console.log("Wrote: %s", data);
}
//call close method : will trigger close 
outputStream.close();

outputStream.on('close', function () {
    console.log('file stream has been closed!!')
})