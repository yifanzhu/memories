var Collection = require('../models/collection');

module.exports = function(app) {

    app.get('/api/collections', function (req, res) {
        Collection.find({}, function (err, data) {
            if (err) {
                res.send(err);
            }
            else {
                res.json(data);
            }
        });
    });

    app.get('/api/collections/:id', function (req, res) {
        Collection.findById(req.params.id)
            .exec(function (err, data) {
                if (err) {
                    res.send(err);
                }
                else {
                    res.json(data);
                }
            });
    });

    app.post('/api/collections', function (req, res) {
      
        var data = req.body;
        var collection = new Collection({
            title: data.title,
            imgUrl: data.imgUrl,
            description: data.description,
            _userId: data.userId
        });
        collection.save(function (err) {
            if (err) {
                res.send(err)
            }
            else {
                res.json(data);
            }

        });
    });

    app.put('/api/collections', function (req, res) {
        var data = req.body,
            query = {'_id': data.id};

        Collection.findOneAndUpdate(query, data, {}, function(err){
            if (err) {
                res.send(err)
            }
            else {
                res.json(data);
            }
        });

    });

    app.delete('/api/collections', function (req, res) {
        Collection.findOne({
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