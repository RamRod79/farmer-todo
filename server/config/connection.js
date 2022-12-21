const mongoose = require('mongoose');


// const MONGOD_URI = MONGODB_URI = 'mongodb+srv://Ramrod:MerryChristmas@cluster0.xactu5z.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/farmer-todo', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
	console.log('MDB is connected')
})

module.exports = mongoose.connection;
