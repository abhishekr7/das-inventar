//MVC 

//model -> data
//view -> send to the user 
//controller -> grab the data from the "model" and give it to thw view
var express = require('express');
var myController = require('./controllers/myController');
var path = require('path');

//var myRouter = require('./routes/myRouter');

var app = express();

//set up template engine
//could be html alternatively
app.set('view engine','ejs');

app.set('views', path.join(__dirname, '/views'));

//static files
app.use(express.static('./public')); 	// localhost:3000/assets/styles.css

//fire controllers
myController(app);

//app.use('/', myRouter);

app.listen(8000);

console.log('port 8000!');

module.exports = app;