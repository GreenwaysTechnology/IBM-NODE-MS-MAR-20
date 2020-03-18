const express = require('express');

//create Router

const router = express.Router();

//users
router.get('/list', function (req, res) {
    res.end('<h1>USERS Api : GET request</h1>')
});
router.post('/', function (req, res) {
    res.end('<h1>USERS Api : POST request</h1>')
});
router.put('/1', function (req, res) {
    res.end('<h1>USERS Api : PUT request</h1>')
});
router.delete('/', function (req, res) {
    res.end('<h1>USERS Api : DELETE request</h1>')
});

module.exports = router;