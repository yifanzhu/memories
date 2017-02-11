var User = require('../models/user');

module.exports = function(app) {
    app.post('/api/users', function(req, res) {
        var user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        user.save(function(err) {
            if(err) {
                res.send(err)
            }

        });
    });

    app.post('/api/users/find', function(req, res) {
        User.findOne({
            email: req.body.email,
            password: req.body.password
        }, '', function(err, data){
            if(err) {
                res.send(err);
            }
            else {
                res.json(data);
            }
        })
    });
};