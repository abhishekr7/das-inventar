//MVC 

//model -> data
//view -> send to the user 
//controller -> grab the data from the "model" and give it to thw view

//var engines = require('consolidate');

//var express = require('express');

//var myRouter = require('./routes/myRouter');

const express = require('express');
const app = express();
const path = require('path');

const router = express.Router();

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

router.get('/index', function(req,res){
	res.render('index.html');
});

router.get('/time', function(req,res){
	res.render('time_series.html');
});

router.get('/product', function(req,res){
	res.render('product_wise.html');
});

router.get('/country', function(req,res){
	res.render('country_wise.html');
});

//add the router
//Store all HTML files in view folder.

//static files
//app.use(express.static('./public')); 	// localhost:3000/assets/styles.css

app.use('/', router);
app.listen(8000);

console.log('port 8000!');
console.log(__dirname);


// firebase app must be listed always and before all firebase products

/*
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

// initialize firebase
firebase.initializeApp(firebaseConfig);


//**********************CREATE NEW USER***********************************

firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
	// handle errors here
	//...
	var errorCode = error.code;
	var errorMessage = error.message;
});

//************************************************************************

//**********************SIGN IN*******************************************

firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error){
	// handle errors here
	var errorCode = error.code;
	var errorMessage = error.message;
});

//************************************************************************

//**********************SIGN OUT*******************************************

firebase.auth().signOut().then(function(){
	// sign out successful
}).catch(function(error){
	// error occurred
});

//************************************************************************

*/