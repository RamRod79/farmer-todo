const mongoose = require('mongoose');


// MONGODB_URI = 'mongodb+srv://Ramrod:MerryChristmas@farmertodo.hncaqbo.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/project3', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

module.exports = mongoose.connection;
