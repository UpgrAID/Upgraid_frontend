var Backbone = require('backbone');
var Friendly = require('../models/friendly');
var Store = require('../store');


var Friendlies = Backbone.Collection.extend({
	url: 'https://safe-brook-9891.herokuapp.com/api/friends/',
	model: Friendly
});

module.exports = Friendlies;
