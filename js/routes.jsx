var React = require('react');
var ReactDOM = require('react-dom');
var Backbone= require('backbone');
var GoalListApp = require('./components/profilePage/goalList/goalListApp.jsx');
var PostListApp = require('./components/profilePage/post/postListApp.jsx');
var Greeting = require('./components/profilePage/greeting.jsx');
var Login = require('./components/loginRegistration/login.jsx');
var Friends = require('./components/profilePage/friends.jsx')

var Router=Backbone.Router.extend({
	initialize:function() {
		Backbone.history.start({pushState:true});
	},
	routes:{
		'userView/:id':'userView',
		'profile/:username': 'profile',
		"":"index"
	},
	index: function(){
		ReactDOM.render(<Login router={this}/>, document.getElementById('app'));
		
		
		
	}
});

var router = new Router();




router.on('route:profile', function(userId){
		username=$("#username").val();
		var Goal = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/profiles/?username='+username
		})
		var GoalCollection = Backbone.Collection.extend({
			Model:Goal,
			url:'https://safe-brook-9891.herokuapp.com/api/profiles/?username='+username
		})
		var test = new GoalCollection();
		test.fetch({
			success: function(resp) {
			var test=resp.toJSON();
			console.log(test);
			var name=test[0].user.first_name;
			var friends = test[0].user.friend_set;
			console.log(friends);
			
			var mapped=test[0].user.goal_set;
			// console.log(mapped);
			ReactDOM.render(<Greeting name={name}/>,document.getElementById('greeting'));
			ReactDOM.render(<GoalListApp data={mapped}/>, document.getElementById('goal'));
			ReactDOM.render(<Friends data={friends} router={router}/>, document.getElementById('friends'))
			}
		})
		

		var Post = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/posts/?username='+username
		})

		var PostCollection = Backbone.Collection.extend({
			Model:Post,
			url:'https://safe-brook-9891.herokuapp.com/api/posts/?username='+username
		})
		var post = new PostCollection();
		post.fetch({
			success: function(resp) {
			test=resp.toJSON();
			ReactDOM.render(<PostListApp data={test}/>, document.getElementById('app'))
			}
		})
})

router.on('route:userView', function(userId){
		userId = $(".friend").val();
		console.log(userId);
		
		var userView = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/users/'+userId
		})
		var UserCollection = Backbone.Collection.extend({
			Model:userView,
			url:'https://safe-brook-9891.herokuapp.com/api/users/'+userId
		})
		var UserProfile = new UserCollection();
		UserProfile.fetch({
			success: function(resp) {
			var test=resp.toJSON();
			console.log(test);
			

			}
});

});




module.exports = Router;		
	