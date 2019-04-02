var mongoose = require('mongoose');
var bodyParser = require('body-parser');

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
		
		//console.log("hello");
		console.log(req.body);

		var bill = 0;

		veg1_Q = req.body.veg1_quantity;
		veg2_Q = req.body.veg2_quantity;
		veg3_Q = req.body.veg3_quantity;
		nonveg1_Q = req.body.nonveg1_quantity;
		nonveg2_Q = req.body.nonveg2_quantity;
		nonveg3_Q = req.body.nonveg3_quantity;
		address = req.body.address;

		if(veg1_Q != ''){
			var veg1_P = 200;
			bill = bill + (veg1_Q * veg1_P);
		}

		if(veg2_Q != ''){
			var veg2_P = 300;
			bill = bill + (veg2_Q * veg2_P);
		}

		if(veg3_Q != ''){
			var veg3_P = 400;
			bill = bill + (veg3_Q * veg3_P);
		}

		if(nonveg1_Q != ''){
			var nonveg1_P = 250;
			bill = bill + (nonveg1_Q * nonveg1_P);
		}

		if(nonveg2_Q != ''){
			var nonveg2_P = 350;
			bill = bill + (nonveg2_Q * nonveg2_P);
		}

		if(nonveg3_Q != ''){
			var nonveg3_P = 450;
			bill = bill + (nonveg3_Q * nonveg3_P);
		}

		//set pause
		//setTimeout(function(){}, 2000);

		console.log("Bill : " + bill);

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