var React = require('react');
var Backbone = require('backbone');

var Post = Backbone.Model.extend({
	url: 'https://safe-brook-9891.herokuapp.com/api/posts/',
	initialize: function() {
	}
});

module.exports = Post;
