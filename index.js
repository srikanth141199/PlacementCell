import express from "express";
import passport from 'passport';
import passportLocal from './config/passport-local-startegy.js';
import dotenv from 'dotenv';
import { mongoose, db } from './config/mongoose.js';
import session from 'express-session';
import router from "./src/routes/index.js";


const app = express();
const port = process.env.PORT || 3200;


app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./assets'));

app.use(session({
	secret: 'your_secret_key',
	resave: false,
	saveUninitialized: false
  }));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use('/', router);

app.listen(port, function (error) {
	if (error) {
		console.log(`Error in connecting to server: ${error}`);
		return;
	}
	console.log(`Server running on port: ${port}`);
});