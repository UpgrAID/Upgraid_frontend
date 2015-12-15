var Backbone = require('backbone');
var Comment = require('../models/comment');


var Comments = Backbone.Collection.extend({
	url: 'https://safe-brook-9891.herokuapp.com/api/comments/',
	model: Comment;
});

module.exports = Comments;
