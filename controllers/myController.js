var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var vegCount = 3;
var nonvegCount = 3; 

//connect to the database
mongoose.connect('mongodb+srv://admin:admin@pizza-cluster-46mvw.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });

mongoose.connection.on('error', (err) => {
	console.log('connection error');
});

mongoose.connection.on('connnected', () => {
	console.log('connnected');
})

//create a schema - this is like a blueprint
var pizzaSchema = new mongoose.Schema({
	id: String,
	name: String,
	price: Number
});

//create a model based on a Schema
var Pizzas = mongoose.model('Pizzas', pizzaSchema);

var urlencodedParser = bodyParser.urlencoded({ extended: false });

//create an item of the model type

/*
var veg_pizza1 = Pizzas({id: '11', name: 'Margherita', price: 200}).save(function(err){
	if (err) throw err;
	console.log('Margherita saved')
})

var veg_pizza2 = Pizzas({id: '12', name: 'Farmhouse', price: 300}).save(function(err){
	if (err) throw err;
	console.log('Farmhouse saved')
})

var veg_pizza3 = Pizzas({id: '13', name: 'Veg Extravaganza', price: 400}).save(function(err){
	if (err) throw err;
	console.log('Veg Extravaganza saved')
})

var nonveg_pizza1 = Pizzas({id: '01', name: 'Non Veg Supreme', price: 250}).save(function(err){
	if (err) throw err;
	console.log('Non Veg Supreme saved')
})

var nonveg_pizza2 = Pizzas({id: '02', name: 'Pepper Barbeque Chicken', price: 350}).save(function(err){
	if (err) throw err;
	console.log('Pepper Barbeque Chicken saved')
})

var nonveg_pizza3 = Pizzas({id: '03', name: 'Chicken Sausage', price: 450}).save(function(err){
	if (err) throw err;
	console.log('Chicken Sausage saved')
})
*/

module.exports = function(app){

	//handle routes

	app.get('/mainpage', function(req, res, next){
		//console.log('controller works !')
		res.render('mainpage');
	});

	app.get('/menu', function(req, res, next){
		res.render('menu');
	});

	app.get('/veg', function(req, res, next){
		res.render('veg');
	});

	app.get('/nonveg', function(req, res, next){
		res.render('nonveg');
	});

	app.get('/order', function(req, res, next){
		res.render('order');
	});

	app.get('/signup', function(req, res, next){
		res.render('signup');
	});

	app.get('/login', function(req, res, next){
		res.render('login');
	});

	app.get('/contact', function(req, res, next){
		res.render('contact');
	});

	app.get('/confirmation', function(req, res, next){
		res.render('confirmation');
	});

	app.get('/offer', function(req, res, next){
		res.render('offer')
	});

	app.post('/order', urlencodedParser, function(req, res, next){
		
		console.log(vegCount);
		
		console.log(req.body);

		var bill = 0;

		veg1_Q = req.body.veg1_quantity;
		veg2_Q = req.body.veg2_quantity;
		veg3_Q = req.body.veg3_quantity;
		nonveg1_Q = req.body.nonveg1_quantity;
		nonveg2_Q = req.body.nonveg2_quantity;
		nonveg3_Q = req.body.nonveg3_quantity;
		address = req.body.address;

		var promise;

		if(veg1_Q != ''){

			var promise = new Promise(function(resolve, reject){

				Pizzas.findOne({'id':'11'}, 'price' , function(err, ob){
				
					if(err){
						console.log("error!");
					}

					resolve(ob.price);
				});
			});
		}

		
		//set pause
		//setTimeout(function(){}, 2000);

		

		promise.then(function(price){
			
			bill = bill + price;

			console.log("Bill : " + bill);
		});

		res.render('confirmation', {bill : bill, address: address});
		//res.render('mainpage');
		
		//res.render('confirm');

		//res.redirect('order');
	});

	/*
	app.delete('/todo', function(req, res){

	});
	*/
};