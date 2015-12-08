var React = require('react');
var ReactDOM = require('react-dom');
var Backbone= require('backbone');
var GoalList = require('./components/profilePage/goalListApp.jsx');
var Login = require('./components/loginRegistration/login.jsx');
var Registration = require('./components/loginRegistration/registration.jsx');

var Router=Backbone.Router.extend({
	initialize:function() {
		Backbone.history.start({pushState:true});
	},
	routes:{
		'profile/:username': 'profile',
		"":"index"
	},
	index: function(){
		ReactDOM.render(<Login router={this}/>, document.getElementById('login'));
		ReactDOM.render(<Registration/>, document.getElementById('registration'));
	}
});

var router = new Router();


router.on('route:profile', function(){
	console.log('hi');
})


module.exports = Router;		
	