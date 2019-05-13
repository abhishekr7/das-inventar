var express = require('express');
var router = express.Router();

router.get('/mainpage', function(req, res, next){
	//console.log('controller works !')
	res.render('mainpage')
});

router.get('/menu', function(req, res, next){

	res.render('menu')
});

router.get('/veg', function(req, res, next){

	res.render('/veg')
});

router.get('/nonveg', function(req, res, next){

	res.render('/nonveg')
});

module.exports = router;