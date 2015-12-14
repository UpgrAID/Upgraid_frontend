var Backbone = require('backbone');
var GPost = require('../models/gpost');


var GroupPostCollection = Backbone.Collection.extend({
	url: 'https://safe-brook-9891.herokuapp.com/api/posts/',
	model: GPost
});

module.exports = GroupPostCollection;
