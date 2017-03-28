const express = require('express');

const app = express();

app.use('/api', require('./routes/routes'));


app.listen(9000, function() {
	console.log('the app is running on the port 9000');
});
