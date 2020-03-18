const fs = require('fs');
const path = require('path');

//const path = "./src/assets/info.txt";
const filePath = path.join(__dirname, "assets/big.file");
const options = {
    encoding: 'utf-8'
};

//create read stream

const inputStream = fs.createReadStream(filePath,options);

//add events for listensing
let data = '';
inputStream.on('data', function (chunk) {
      console.log(`Received ${chunk.length} bytes of data.`);
      data += chunk;

});

//end event
inputStream.on('end', function () {
      console.log('There will be no more data to read!');
      //console.log(data);
})

//error event: for error handling
inputStream.on('error', function (err) {
      console.log(`Some thing went wrong! ${err}`)
});