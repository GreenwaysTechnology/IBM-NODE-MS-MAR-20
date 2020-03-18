const http = require('http');

const port = 3001;

//create server
const server = http.createServer(function (req, res) {
    res.write('<h1>Welcome to node application</h1>')
    res.end();
});

//deploy app and start server

server.listen(port, function () {
    console.log('Server startup done!')
});