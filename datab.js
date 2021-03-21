const mongoose = require('mongoose');

//Connect to the test database running on our MongoDB instance on localhost
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
	console.log('Connected to MongoDB');
})
.catch(err => {
	console.log('Error connecting to MongoDB');
});