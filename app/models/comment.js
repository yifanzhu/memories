var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new Schema({
    content: String,
    _postId: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
    _userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    created_at: {
        type: Date, default: Date.now
    }
}, 
    { collection: 'Comments' });

module.exports = mongoose.model('Comment', commentSchema);
