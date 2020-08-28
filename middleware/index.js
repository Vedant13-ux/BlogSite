var User = require('../models/user');
const user = require('../models/user');
var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next) {
	if (req.isAuthenticated()) {
		next();
	}
	req.flash('error', 'You should be logged in to do that');
	res.redirect('/login');
};

module.exports = middlewareObj;
