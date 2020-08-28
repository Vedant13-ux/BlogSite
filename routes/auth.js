const express = require('express');
var router = express.Router();
var passport = require('passport');

var User = require('../models/user');
// const passport = require('../config/passport');

// // Local Login

// router.get('/signup', (req, res) => {
// 	res.render('signup');
// });

// router.post(
// 	'/signup',
// 	passport.authenticate(
// 		'local-signup',
// 		{
// 			successRedirect: '/home',
// 			failureRedirect: '/signup',
// 			failureFlash: True
// 		},
// 		function(req, res) {
// 			req.flash('sucess', 'Welcome to Yelp Camp');
// 		}
// 	)
// );

// router.get('/login', function(req, res) {
// 	res.render('login');
// });
// router.post(
// 	'/login',
// 	passport.authenticate('local-login', {
// 		successRedirect: '/home',
// 		failureRedirect: '/login',
// 		failureFlash: True
// 	}),
// 	function(req, res) {
// 		console.log('Logged in');
// 	}
// );

// router.get('/logout', (req, res) => {
// 	req.logOut();
// 	req.flash('success', 'Successfully Logged You Out');
// 	res.redirect('/campgrounds');
// });

// // Facebook Login
// app.get('/auth/facebook', passport.authenticate('facebook', { scope: [ 'email' ] }));

// app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), function(
// 	req,
// 	res
// ) {
// 	res.redirect('/home');
// });

module.exports = router;
