
import mongoose from 'mongoose';

const DB = "mongodb+srv://kolleparasrikanth:Srikanth5359$@ecomdb.ndaljpt.mongodb.net/PlacementCell?retryWrites=true&w=majority";


mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database :: Mongodb');
});

export {mongoose, db};
