var Backbone = require('backbone');
var GoalListApp = require('../components/profilePage/goalList/goalListApp.jsx');

var Goal = Backbone.Model.extend({
	url:'https://safe-brook-9891.herokuapp.com/api/goals/',
	initialize: function() {
		
	}

});





module.exports = Goal;
