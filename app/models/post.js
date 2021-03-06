var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var postSchema = new Schema({
	title: String,
	imgUrl: String,
	content: String,
	category: Array,
	_collectionId: {type: mongoose.Schema.Types.ObjectId, ref: 'Collection'},
	_userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	updated_at: {
		type: Date, default: Date.now
	}
},
{ collection: 'Posts' });

module.exports = mongoose.model('Post', postSchema);
