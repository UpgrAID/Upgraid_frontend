var Backbone = require('backbone');


var Message = Backbone.Model.extend({
	urlRoot:'https://safe-brook-9891.herokuapp.com/api/message/user',
	url
	initialize: function() {

	}

});

module.exports = Message;
