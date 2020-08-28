///including packages
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const expressSanitizer = require('express-sanitizer');
const flash = require('connect-flash');
const bcrypt = require('bcrypt');
require('dotenv').config();

//database config
mongoose
	.connect('mongodb://127.0.0.1:27017/blog-site', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true
	})
	.then(() => {
		console.log('Connected');
	})
	.catch((err) => {
		console.log(err.message);
	});

app.use(expressSanitizer());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(
	require('express-session')({
		secret: 'Vedant is Cool',
		resave: false,
		saveUninitialized: false
	})
);
app.use(flash());

//Setting Up Passport.JS
app.use(passport.initialize());
app.use(passport.session());
// require('./config/passport')(passport); //Login Steategy

app.use(function(req, res, next) {
	res.locals.error = req.flash('error');
	next();
});

app.use(function(req, res, next) {
	res.locals.success = req.flash('success');
	next();
});

app.use(function(req, res, next) {
	res.locals.currentUser = req.user;
	next();
});

var authRoutes = require('./routes/auth');
var indexRoutes = require('./routes/index');

app.use(authRoutes);
app.use(indexRoutes);

app.listen(process.env.PORT || 3000, process.env.IP, function() {
	console.log('YelpCamp Has Started ');
});
