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


	/*app.post('/todo', function(req, res){

	});
	*/

	/*)
	app.delete('/todo', function(req, res){

	});
	*/
};