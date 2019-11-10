const functions = require('firebase-functions');
const admin = require('firebase-admin');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

admin.initializeApp();

exports.addTimeSeriesData = functions.https.onRequest((req,res) => {
	
	const KEY = req.query.key;
	const DATE = req.query.date;
	const QUANTITY = req.query.quantity; 
	const SALES = req.query.sales;

	periodDate = {
		date: DATE,
		quantity: QUANTITY,
		sales: SALES
	};

	admin.database().ref('dates/' + KEY).set(periodDate)
		.then(() => {
			res.status(200).send("success");
		})
		.catch(error => {
			console.log(error);
			res.status(500).send(err);
		})
});


exports.addProductsData = functions.https.onRequest((req, res) => {

	const KEY = req.query.key;
	const PNAME = req.query.pname;
	const RETURNS = req.query.returns;

	productData = {
		returns: RETURNS,
		pname: PNAME
	};

	admin.database().ref('products/' + KEY).set(productData)
		.then(() => {
			res.status(200).send("success");
		})
		.catch(error => {
			console.log(error);
			res.status(500).send(err);
		})
});

exports.addGeoData = functions.https.onRequest((req, res) => {

	const KEY = req.query.key;
	const GEOLOC = req.query.geoloc; 
	const SALES = req.query.sales;

	geoData = {
		sales: SALES,
		geoloc: GEOLOC
	};

	admin.database().ref('geo/' + KEY).set(geoData)
		.then(() => {
			res.status(200).send("success");
		})
		.catch(error => {
			console.log(error);
			res.status(500).send(err);
		})
});

/*
https://us-central1-<your-project-id>.cloudfunctions.net/updateTrialPeriodDate?ts=1528718473
https://us-central1-best-inventory-manager.cloudfunctions.net/addGeoData?key=&geoloc=&sales=
*/
