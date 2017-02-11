var Post = require('../models/post');

module.exports = function(app) {

    app.get('/api/posts', function (req, res) {
        Post.find({}, function (err, data) {
            if (err) {
                res.send(err);
            }
            else {
                res.json(data);
            }
        });
    });

    app.get('/api/posts/:id', function (req, res) {
        Post.findById(req.params.id)
            .exec(function (err, data) {
                if (err) {
                    res.send(err);
                }
                else {
                    res.json(data);
                }
            });
    });

    app.post('/api/posts', function (req, res) {
      
        var data = req.body;
        var post = new Post({
            title: data.title,
            imgUrl: data.imgUrl,
            content: data.content,
            comments: data.comments,
            _userId: data.userId
        });
        post.save(function (err) {
            if (err) {
                res.send(err)
            }
            else {
                res.json(data);
            }

        });
    });

    app.put('/api/posts', function (req, res) {
        var data = req.body,
            query = {'_id': data.id};

        Post.findOneAndUpdate(query, data, {}, function(err){
            if (err) {
                res.send(err)
            }
            else {
                res.json(data);
            }
        });

    });

    app.delete('/api/posts', function (req, res) {
        Post.findOne({
            'title': 'aa'
        }, '', function (err, data) {
            if (err) {
                console.log('err,', err)
            }
            else {
                console.log('data,', data)
            }
        })
    });
};