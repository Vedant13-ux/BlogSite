const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var userSchema = new mongoose.Schema({
	local: {
		username: String,
		password: String,
		gender: String,
		created: {
			type: Date,
			default: Date.now
		}
	},
	facebook: {
		id: String,
		token: String,
		email: String,
		name: String
	}
});

userSchema.methods.generateHash = (password) => {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(7));
};
userSchema.methods.validPassword = (password) => {
	return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);
