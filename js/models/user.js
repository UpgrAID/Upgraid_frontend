var Backbone = require('backbone');

var User = Backbone.Model.extend({
	initialize: function() {
		console.log('Checking User.')
	},
	defaults: {
		username: null,
		password: null
	},
	validate: function(attrs) {
		if(!attrs.username) {
			return 'username is required'
		},
		if(!attrs.password) {
			return 'password is required'
		}
	}
})