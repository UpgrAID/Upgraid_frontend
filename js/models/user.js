var Backbone = require('backbone');
var Login = require('../components/loginRegistration/login.jsx');

var User = Backbone.Model.extend({
	validate: function(attrs) {
		if(!attrs.username) {
			$('#user').html('Username is required');
		}
		if(!attrs.password) {
			$('#pass').html('Password is required');
		}
	},
	initialize: function() {
		console.log('Checking User.')
	}
	
})

module.exports = User;