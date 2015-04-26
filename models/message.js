var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var messageSchema = new Schema({
	message: String,
	userId : Schema.Types.ObjectId,
	senderId : Schema.Types.ObjectId,
	recievedTime : Date
})

module.exports = mongoose.model('Message', messageSchema);