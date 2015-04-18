var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var userSchema = new Schema({
	userName: String,
	location: String,
	age:Number
})

module.exports = mongoose.model('User',userSchema);