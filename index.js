const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// conncet to mongodb
mongoose.connect('mongodb://localhost/refugeesMatch');
mongoose.Promise = global.Promise;

// allow to Access this server (CORS permissions) :)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// this the middleware that handle the body of the request
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

// initial the reouter
app.use('/api', require('./routes/routes'));


app.listen(process.env.port || 8080, function() {
	console.log('the app is running on the port 8080');
});
