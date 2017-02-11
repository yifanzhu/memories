var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var postSchema = new Schema({
	title: String,
	imgUrl: String,
	description: String,
	_userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	updated_at: {
		type: Date, default: Date.now
	}
},
{ collection: 'Collections' });

module.exports = mongoose.model('Collection', collectionSchema);
