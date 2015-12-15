var Backbone = require('backbone');
var Post = require('../models/post');


var PostCollection = Backbone.Collection.extend({
	url: 'https://safe-brook-9891.herokuapp.com/api/posts/',
	model: Post
});

module.exports = PostCollection;
