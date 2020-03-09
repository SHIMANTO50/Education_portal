var express 	= require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');

router.get('/', function(req, res){
	console.log('login page requested!');
	res.render('login/index');
});

router.post('/', function(req, res){
		
		var user ={
			username: req.body.uname,
			password: req.body.password
		};

		


		userModel.validate(user, function(result){
				console.log(result);
				if (result[0].type=='student') {
					res.cookie('username', req.body.uname);
				res.redirect('/home');
				}
				
				else{
					res.redirect('/login');
				}


		});
});

module.exports = router;

