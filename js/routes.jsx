var React = require('react');
var ReactDOM = require('react-dom');
var Backbone= require('backbone');
var GoalListApp = require('./components/profilePage/goalList/goalListApp.jsx');
var PostListApp = require('./components/profilePage/post/postListApp.jsx');
var GroupPostCollection = require('./collections/groupPostCollection');
var GroupHome = require('./components/groupPage/groupHome.jsx')
var Login = require('./components/loginRegistration/login.jsx');

var Router=Backbone.Router.extend({
	initialize:function() {
		Backbone.history.start({pushState:true});
	},
	routes:{
		'group/:username': 'group',
		'profile/:username': 'profile',
		"":"index"
	},
	index: function(){
		ReactDOM.render(<Login router={this}/>, document.getElementById('app'));
	}
});

var router = new Router();



router.on('route:profile', function(){
	username=$("#username").val();
		

		var Goal = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/goals/?username='+username
		})
		var GoalCollection = Backbone.Collection.extend({
			Model:Goal,
			url:'https://safe-brook-9891.herokuapp.com/api/goals/?username='+username
		})
		var test = new GoalCollection();
		test.fetch({
			success: function(resp) {
			test=resp.toJSON();
			console.log(test);
			ReactDOM.render(<GoalListApp data={test}/>, document.getElementById('goal'))
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

router.on('route:group', function(){
	username=$("#username").val();

	var GroupPosts = new GroupPostCollection();

	GroupPosts.fetch({
		success: function(resp){
			console.log(resp.toJSON());
			var posts = resp.toJSON();
			ReactDOM.render(<GroupHome posts={posts} user={username}/>, document.getElementById('app'))
		},
		error: function(err){
			console.log(err);
		}
	})
});



module.exports = Router;
