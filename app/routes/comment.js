var Comment = require('../models/comment');

module.exports = function(app) {
    app.post('/api/comments', function(req, res) {
        var comment = new Comment({
            content: req.body.content,
            _postId: req.body.postId,
            _userId: req.body.userId
        });
        comment.save(function(err) {
            if(err) {
                res.send(err)
            }
            else {
                res.json(comment);
            }

        });
    });

    app.post('/api/comments/find', function(req, res) {
        Comment.find({
            _postId: req.body.postId
        })
            .populate('_userId')
            .exec(function (err, data) {
            if(err) {
                res.send(err);
            }
            else {
                res.json(data);
            }
        })
    });
    
};