//MVC 

//model -> data
//view -> send to the user 
//controller -> grab the data from the "model" and give it to thw view
var express = require('express');
var myController = require('./controllers/myController');
var path = require('path');

//var myRouter = require('./routes/myRouter');

var app = express();

// firebase app must be listed always and before all firebase products
var firebase = require("firebase/app");

// firebase products to be used
require("firebase/auth");
require("firebase/firestore");
require("firebase/functions");
require("firebase/database");

//initializing firebase

// firebase config object 
var firebaseConfig = {
	// ...
  	apiKey: "AIzaSyAPHwpmhqwAMwJ9iNcsGv_jHywHttOEa6E",
  	authDomain: "best-inventory-manager.firebaseapp.com",
  	databaseURL: "https://best-inventory-manager.firebaseio.com",
  	projectId: "best-inventory-manager",
  	storageBucket: "best-inventory-manager.appspot.com",
  	messagingSenderId: "323033727262",
  	appId: "1:323033727262:web:1dcc9fa1ce5bc2e508890f",
  	measurementId: "G-5ZZPH485JF"
}

//initialize firebase
firebase.initializeApp(firebaseConfig);


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