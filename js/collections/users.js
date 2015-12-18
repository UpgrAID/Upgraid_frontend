var Backbone = require('backbone');
var User =  require('../models/user');

var Users = Backbone.Collection.extend({
	url: 'https://safe-brook-9891.herokuapp.com/api/users/',
	model: User
});

module.exports = Users;
