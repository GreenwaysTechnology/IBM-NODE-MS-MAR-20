const http = require('http');

const port = 3001;

//create server
const server = http.createServer(function (req, res) {

    //data from client
    let data = ''
    req.on('data', function (chunk) {
        console.log(chunk.toString());
        data += chunk;
    });
    req.on('end', function () {
        res.write(data);
        res.end();
    });

});

//deploy app and start server

server.listen(port, function () {
    console.log('Server startup done!')
});

//add events for servers
server.on('request', function (request, response) {
    console.log(`Request received ${new Date()}`)
});