// var LocalStrategy = require('passport-local').Strategy;
// var FacebookStrategy = require('passport-facebook');
// var GoogleStrategy = require('passport-google');
// var User = require('../models/user');
// var passport = require('passport');

// module.exports = function() {
// 	passport.serializeUser(function(user, done) {
// 		done(null, user.id);
// 	});
// 	passport.deserializeUser(function(id, done) {
// 		User.findById(id, function(err, user) {
// 			done(err, user);
// 		});
// 	});

// 	passport.use(
// 		'local-signup',
// 		new LocalStrategy({
// 			usernameField: 'username',
// 			passwordField: 'password',
// 			passReqToCallback: true
// 		}),
// 		function(req, username, password, done) {
// 			process.nextTick(function() {
// 				User.findOne({ 'local.username': username }, function(err, user) {
// 					if (err) {
// 						return done(err);
// 					}
// 					if (user) {
// 						return done(null, false, req.flash('error', 'The username is already taken. '));
// 					} else {
// 						var newUser = new User();
// 						newUser.local.username = username;
// 						newUser.local.password = newUser.generateHash(password);
// 						newUser.save((err) => {
// 							if (err) {
// 								throw err;
// 							}
// 							return done(null, newUser);
// 						});
// 					}
// 				});
// 			});
// 		}
// 	);

// 	passport.use(
// 		'local-login',
// 		new LocalStrategy({
// 			usernameField: 'username',
// 			passwordField: 'password',
// 			passReqToCallback: True
// 		}),
// 		function(req, username, password, done) {
// 			User.findOne({ 'local.username': username }, async function(err, user) {
// 				if (err) {
// 					return done(err);
// 				}
// 				if (!user) {
// 					done(null, false, req.flash('error', 'Username does not exist'));
// 				}
// 				if (user.validPassword(passport)) {
// 					done(null, false, req.flash('error', 'Password is incorrect'));
// 				}
// 				return done(null, user);
// 			});
// 		}
// 	);

// 	passport.use(
// 		'facebook',
// 		new FacebookStrategy(
// 			{
// 				clientID: process.env.FACEBOOK_APP_ID,
// 				clientSecret: process.env.FACEBOOK_APP_SECRET,
// 				callbackURL: 'http://localhost:3000/auth/facebook/callback'
// 			},
// 			function(accessToken, refreshToken, profile, done) {
// 				User.findOne({ 'facebook.id': profile.id }, async function(err, user) {
// 					if (err) {
// 						return done(err);
// 					}
// 					if (user) {
// 						return done(null, user);
// 					} else {
// 						var newUser = new User();
// 						newUser.facebook.id = profile.id;
// 						newUser.facebook.email = profile.emails[0].value;
// 						newUser.facebook.token = accessToken;
// 						newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
// 						newUser.save(function(err) {
// 							if (err) {
// 								throw err;
// 							}
// 							return done(null, newUser);
// 						});
// 					}
// 				});
// 			}
// 		)
// 	);
// };
