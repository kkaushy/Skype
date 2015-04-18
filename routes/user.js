var express = require('express');
var router = express.Router();
var User = require('../models/user')
/* GET users listing. */
router.get('/', function(req, res, next) {
	
	User.find(function(err, users){
		if(err){
			res.send(err);
		}
		res.json(users);
		
	})
   
});

router.post('/', function(req, res, next) {

	var userName = req.body.userName;
	var location = req.body.location;
	var age = req.body.age;
	
	var user = new User({
		"userName":userName,
		"location":location,
		"age":age
	})
	
	user.save(function(err, user){
		if(err){
			res.send(err);
		}
		res.json(user);
	})
});

module.exports = router;
