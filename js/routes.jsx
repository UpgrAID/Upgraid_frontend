var React = require('react');
var ReactDOM = require('react-dom');
var Backbone= require('backbone');
var GoalList = require('./components/profilePage/goalListApp.jsx');

	var Router=Backbone.Router.extend({  
	  initialize: function () {
	    Backbone.history.start({pushState: true});
	  },
	  routes: {
	    'profile:/username':'profile'
	    "":"index"
	    
	    
	  },
	  index: function() {
	  	console.log('test')
	  }
	});

var router = new Router();

router.on('route:profile', function() {
	ReactDOM.render(<GoalList/>, document.getElementById('goal'));

}

var Router = Backbone.Router.extend({

module.exports = router;		
	