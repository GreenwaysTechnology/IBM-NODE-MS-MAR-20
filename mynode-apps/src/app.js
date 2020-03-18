const express = require('express'); // returns function
const BooksRouter = require('./routes/booksroutes');
const UserRouter = require('./routes/userrouter');
const bodyParser = require('body-parser');


const port = 3001;

//Create application Object
const app = express();

//Attach body parser middleware
app.use(bodyParser.json());

//bind BooksRouterwith with main Application
app.use("/api/books", BooksRouter);
app.use("/api/users", UserRouter)

//server startup
app.listen(port, function () {
    console.log('Express server With routing is up!')
});