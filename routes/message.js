var express = require('express');
var router = express.Router();
var Message = require('../models/message')
/* GET users listing. */
router.get('/', function(req, res, next) {
	
	Message.find(function(err, messages){
		if(err){
			res.send(err);
		}
		res.json(messages);
		
	})
   
});

router.post('/', function(req, res, next) {

	var message = req.body.message;
	var senderId = req.body.senderID;
	var userId = req.body.userId;
	
	var message = new Message({
		"message" : message,
		"userId" : userId,
		"senderId" : senderId,
		"recievedTime":new Date
	})
	console.log("in message called");
	message.save(function(err, message){
		if(err){
			res.send(err);
		}
		res.json(message);
	})
});

module.exports = router;
