var express = require('express');
var bc = require('bcryptjs');
var router = express.Router();
var userStore = require('../lib/userStore').create();

router.use(function(req,res,next){
	// console.log('session->',JSON.stringify(req.session));
	next();
});

var loadUserFromSession = function(req,res,next){
  console.log(req.session.userEmail)
	var user = req.session.userEmail && userStore.load(req.session.userEmail);
	if(user){
		req.user = user;		
		res.locals.user = user;
	}else{
		delete req.session.userEmail;
	}
	next();
};

var requireLogin = function(req,res,next){
	req.user? next(): res.redirect('/login');
};

router.use(loadUserFromSession);

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/register', function(req, res) {
  res.render('register');
});

router.post('/register', function(req, res) {
  var salt = bc.genSaltSync(10);
  var hash = bc.hashSync(req.body.password,salt)
  var result = userStore.save({
  	firstName:req.body.firstName,
  	lastName:req.body.lastName,
  	email:req.body.email,
  	password:hash
  });
  result.error ? res.render('register',result) : res.redirect('/dashboard');  
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.post('/login', function(req, res) {
  var user = userStore.load(req.body.email);
  if(user && bc.compareSync(req.body.password,user.password)){
  	req.session.userEmail = user.email;
  	res.redirect('/dashboard');
  }else{
  	res.render('login',{error:'invalid email or password'});
  }
});

router.get('/dashboard', requireLogin, function(req, res) {
  res.render('dashboard'); 
});

router.get('/logout',function(req,res){
	req.session.destroy();
	res.redirect('/');
});

module.exports = router;
