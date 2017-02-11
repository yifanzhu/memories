var express = require('express');
var app = express(); 						
var mongoose = require('mongoose'); 				// mongoose for mongodb
var port = process.env.PORT || 8080; 				// set the port
var bodyParser = require('body-parser');
var database = require('./config/database'); 

app.use(express.static('./public')); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

//connect mongodb
mongoose.connect(database.remoteUrl); 

// listen (start app with node server.js)
app.listen(port);
console.log("App listening on port " + port);

// api route
require('./app/routes/post.js')(app);
require('./app/routes/user.js')(app);
require('./app/routes/comment.js')(app);
