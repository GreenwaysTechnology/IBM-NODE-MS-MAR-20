const express = require('express');
const BOOKS = require('../mock-data/books-mock');
const mongojs = require('mongojs')


//create Router

const router = express.Router();

//read from mock file
// router.get('/list', function (req, res) {
//     res.json(BOOKS);
// });
//read from mongo db

//db connection code
const db = mongojs('BooksDb')

router.get('/list', function (req, res) {

    //Query records from Mongo db
    const books = db.collection('books');
    books.find(function (err, docs) {
        if (err) throw err;
        res.json(docs);
    })

});

// /api/books/1
router.get('/:id', function (req, res) {
    console.log(req.params);
    const id = parseInt(req.params.id); //
    res.end(`<h1>Books Api : GET request : ${id}</h1>`)
});
router.post('/', function (req, res) {
    const data = req.body;
    console.log(data)
    const books = db.collection('books');
    books.insert(data, function (err) {
        if(err) throw err;
        res.json({ message: 'The record has been inserted' });
    })

});
router.put('/1', function (req, res) {
    res.end('<h1>Books Api : PUT request</h1>')
});
router.delete('/1', function (req, res) {
    res.end('<h1>Books Api : DELETE request</h1>')
});

module.exports = router;