var React = require('react');
var ReactDOM = require('react-dom');
var Backbone= require('backbone');
var GoalListApp = require('./components/profilePage/goalList/goalListApp.jsx');
var PostListApp = require('./components/profilePage/post/postListApp.jsx');
var Greeting = require('./components/profilePage/greeting.jsx');
var GroupPostCollection = require('./collections/groupPostCollection');
var GroupHome = require('./components/groupPage/groupHome.jsx')
var Login = require('./components/loginRegistration/login.jsx');
var Friends = require('./components/profilePage/friends.jsx')
var OtherGoals = require('./components/profilePage/goalList/othersGoals.jsx')
var OtherPosts = require('./components/profilePage/post/othersPosts.jsx');
var Nav = require('./components/nav/nav.jsx')
var Router=Backbone.Router.extend({
	initialize:function() {
		Backbone.history.start({pushState:true});
	},
	routes:{
		'userView/:id':'userView',
		'group/:username': 'group',
		'profile/:username': 'profile',
		"":"index"
	},
	index: function(){
		ReactDOM.render(<Login router={this}/>, document.getElementById('app'));
	}
});

var router = new Router();

router.on('route:profile', function(username){
		
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
			var data=resp.toJSON();
			var name=data[0].user.first_name;
			var friends=(data[0].user.friend_set);
			console.log(data);
			
			var mapped=data[0].user.goal_set;
			
			ReactDOM.render(<Nav router={router} username={username}/>,document.getElementById('nav'));
			ReactDOM.render(<Greeting name={name}/>,document.getElementById('greeting'));
			ReactDOM.render(<GoalListApp data={mapped}/>, document.getElementById('goal'));
			ReactDOM.render(<Friends data={friends} router={router}/>, document.getElementById('friends'))
			test=resp.toJSON();

			ReactDOM.render(<GoalListApp data={test}/>, document.getElementById('goal'));
			}
		})
		

		var Post = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/profiles/?username='+username
		})

		var PostCollection = Backbone.Collection.extend({
			Model:Post,
			url:'https://safe-brook-9891.herokuapp.com/api/profiles/?username='+username
		})
		var post = new PostCollection();
		post.fetch({
			success: function(resp) {
			test=resp.toJSON();
			var goalId = test[0].user.goal_set;
			console.log(goalId);
			var posts=test[0].user.post_set;
			ReactDOM.render(<PostListApp data={posts} goalId = {goalId}/>, document.getElementById('app'))
			}
		})
})

router.on('route:userView', function(userId){
		
		
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
			var users=resp.toJSON();
			

			var name= users[0].first_name;
			
			var post= users[0].post_set;
			
			var goals = users[0].goal_set;
			ReactDOM.render(<OtherPosts data={post}/>, document.getElementById('app'));
			ReactDOM.render(<OtherGoals data={goals}/>, document.getElementById('goal'));
			ReactDOM.render(<Greeting name={name}/>,document.getElementById('greeting'));

			}
});

});



router.on('route:group', function(){
	username=$("#username").val();

	var GroupPosts = new GroupPostCollection();

	GroupPosts.fetch({
		success: function(resp){
		
			var posts = resp.toJSON();
			ReactDOM.render(<GroupHome posts={posts} user={username}/>, document.getElementById('app'))
		},
		error: function(err){
			console.log(err);
		}
	})
});





module.exports = Router;
