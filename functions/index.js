const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.addTimeSeriesData = functions.https.onRequest((req,res) => {
	const QUANTITY = req.query.quantity; 
	const SALES = req.query.sales;

	periodDate = {
		quantity: QUANTITY;
		sales: SALES;
	};

	admin.database().ref('').update()
		.then(() => {
			res.status(200).send("success");
		})
		.catch(error => {
			console.log(error);
			res.status(500).send(err);
		})
});
/*
exports.updateTrialPeriodDate = functions.https.onRequest((req, res) => {
   const timestamp = req.query.ts;
   consta trialPeriodDate = new Date(timestamp);

   periodDate = {trialPeriodDate: trialPeriodDate};

   admin.database().ref('/....').update(periodDate)  //  <- set the correct path where you want to write
     .then(() => {
         res.status(200).send("success");
     })
     .catch(error => {
        console.log(error);
        res.status(500).send(err);
     });

});

https://us-central1-<your-project-id>.cloudfunctions.net/updateTrialPeriodDate?ts=1528718473

*/
