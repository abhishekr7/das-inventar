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
var bodyParser = require('body-parser');
const router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// firebase app must be listed always and before all firebase products
var firebase = require("firebase/app");

// firebase products to be used
require("firebase/auth");
require("firebase/firestore");
require("firebase/functions");
require("firebase/database");

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

var database = firebase.database();

var object ; 
var f_data = [];
var f_labels = [];

function getDataFromFirebase(callback, res){
			
	return database.ref('dates').on("value", function(snapshot) {
  				
  	object = snapshot.val();

	var i = 0;

	for(var key in object){

		f_labels.push(object[key].date);
		f_data.push(object[key].sales);
	}

	callback(res);				

	}, function (errorObject) {	
 		console.log("The read failed: " + errorObject.code);
	});
		
}

function renderPageWithData(res){

	res.render('time_series.html', {f_labels: f_labels, f_data: f_data});
}	


app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

router.get('/index', function(req,res){
	res.render('index.html'); 
});

router.get('/time',urlencodedParser , function(req,res){
	getDataFromFirebase(renderPageWithData, res);
});

router.get('/product', function(req,res){
	res.render('product_wise.html');
});

router.get('/country', function(req,res){
	res.render('country_wise.html');
});

app.use('/', router);
app.listen(8000);

console.log('port 8000!');
console.log(__dirname);
