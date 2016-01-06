var Backbone = require('backbone');
var Store = require('../store');


var Friendly = Backbone.Model.extend({
	url:'https://safe-brook-9891.herokuapp.com/api/friends/',
	initialize: function() {

	}
});

module.exports = Friendly;
