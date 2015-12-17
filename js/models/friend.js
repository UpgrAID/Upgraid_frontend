var Backbone = require('backbone');


var Friend = Backbone.Model.extend({
	url:'https://safe-brook-9891.herokuapp.com/api/friends/',
	initialize: function() {

	}
});

module.exports = Friend;
