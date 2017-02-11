var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
	email: String,
	password: String,
	gender: String,
	avatar: String,
	posts : [{ type: Schema.Types.ObjectId, ref: 'Post' }]
},
{ collection: 'Users' });

module.exports = mongoose.model('User', userSchema);
