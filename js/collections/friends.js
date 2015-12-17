var Backbone = require('backbone');
var Friend = require('../models/Friend');


var Friends = Backbone.Collection.extend({
	url: 'https://safe-brook-9891.herokuapp.com/api/friends/',
	model: Friend;
});

module.exports = Friends;
