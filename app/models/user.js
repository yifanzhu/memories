var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
	email: String,
	password: String,
	gender: String,
	avatar: String
},
{ collection: 'Users' });

module.exports = mongoose.model('User', userSchema);
