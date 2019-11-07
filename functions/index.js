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

/*
https://us-central1-<your-project-id>.cloudfunctions.net/updateTrialPeriodDate?ts=1528718473
*/
