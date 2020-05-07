//express module
var express = require('express');

//controller module
var todoController = require('./controllers/todoController.js');

//using the returned methods from var express
var app = express();

//static files
app.use('/assets', express.static('assets'));

//firing (using) the controller
todoController(app);

//using ejs template engine
app.set('view engine', 'ejs');

//adding the dependancy manually
app.engine('ejs', require('ejs').__express);


//listening to port 5500
app.listen(5500);
console.log('Listening to Port : 5500');