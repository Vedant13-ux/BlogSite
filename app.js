///including packages
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();
require('dotenv').config();
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');
var expressSanitizer = require('express-sanitizer');


mongoose
    .connect('mongodb+srv://vedant:1234@yelpcampdb-x41l3.mongodb.net/yelp-camp?retryWrites=true&w=majority', {
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
app.use(function(req, res, next) {
    res.locals.success = req.flash('success');
    next();
});
app.use(function(req, res, next) {
    res.locals.error = req.flash('error');
    next();
});

//Setting Up Passport.JS
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    next();
});