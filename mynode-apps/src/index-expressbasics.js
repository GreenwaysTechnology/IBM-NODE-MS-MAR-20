const express = require('express'); // returns function

const port = 3001;

//Create application Object
const app = express();

//CREATE REST ENDPOINTS

//books
//http verb mapping
app.get('/api/books/list', function (req, res) {
    res.end('<h1>Books Api : GET request</h1>')
});
app.post('/api/books', function (req, res) {
    res.end('<h1>Books Api : POST request</h1>')
});
app.put('/api/books/1', function (req, res) {
    res.end('<h1>Books Api : PUT request</h1>')
});
app.delete('/api/books/1', function (req, res) {
    res.end('<h1>Books Api : DELETE request</h1>')
});


//users
app.get('/api/users/list', function (req, res) {
    res.end('<h1>USERS Api : GET request</h1>')
});
app.post('/api/users', function (req, res) {
    res.end('<h1>USERS Api : POST request</h1>')
});
app.put('/api/users/1', function (req, res) {
    res.end('<h1>USERS Api : PUT request</h1>')
});
app.delete('/api/users/1', function (req, res) {
    res.end('<h1>USERS Api : DELETE request</h1>')
});


//server startup

app.listen(port, function () {
    console.log('Express server is up!')
});