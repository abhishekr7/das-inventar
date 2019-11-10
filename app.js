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

function getDataFromFirebase(callback, res){
			
	return database.ref('dates').orderByChild("date").limitToLast(100).on("value", function(snapshot) {
  				
  	object = snapshot.val();

	var i = 0;

	var f_data = [];
	var f_labels = [];		

	for(var key in object){

		f_labels.push(object[key].date);
		f_data.push(object[key].sales);
	}

	callback(res, f_data, f_labels);				

	}, function (errorObject) {	
 		console.log("The read failed: " + errorObject.code);
	});
		
}

function getDataFromFirebase2(callback, res){
			
	return database.ref('geo').orderByChild("sales").limitToLast(6).on("value", function(snapshot) {
  				
  	object = snapshot.val();

  	var f_data = [];	
	var f_labels = [];

	var i = 0;

	for(var key in object){

		f_labels.push(object[key].geoloc);
		f_data.push(object[key].sales);
	}

	callback(res, f_data, f_labels);				

	}, function (errorObject) {	
 		console.log("The read failed: " + errorObject.code);
	});
		
}

function getDataFromFirebase3(callback, res){
			
	return database.ref('products').orderByKey().limitToLast(6).on("value", function(snapshot) {
  				
  	object = snapshot.val();

  	var f_data = [];
	var f_labels = [];

	var i = 0;

	for(var key in object){

		f_labels.push(object[key].pname);
		f_data.push(object[key].returns);
	}

	callback(res, f_data, f_labels);				

	}, function (errorObject) {	
 		console.log("The read failed: " + errorObject.code);
	});
		
}

function renderPageWithData(res, f_data, f_labels){

	res.render('time_series.html', {f_labels: f_labels, f_data: f_data});
}


function renderPageWithData2(res, f_data, f_labels){

	res.render('country_wise.html', {f_labels: f_labels, f_data: f_data});
}	

function renderPageWithData3(res, f_data, f_labels){

	res.render('product_wise.html', {f_labels: f_labels, f_data: f_data});
}


app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

router.get('/index', function(req,res){
	res.render('index.html'); 
});

router.get('/time', urlencodedParser , function(req,res){
	getDataFromFirebase(renderPageWithData, res);
});

router.get('/country', urlencodedParser , function(req,res){
	getDataFromFirebase2(renderPageWithData2, res);
});

router.get('/product', urlencodedParser, function(req,res){
	getDataFromFirebase3(renderPageWithData3, res)
});

app.use('/', router);
app.listen(8000);

console.log('port 8000!');
console.log(__dirname);
