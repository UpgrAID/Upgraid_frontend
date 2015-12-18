var React = require('react');
var ReactDOM = require('react-dom');
var Backbone= require('backbone');
var Login = require('./components/loginRegistration/login.jsx');
var ProfileApp=require('./components/profilePage/profileApp.jsx');
var UserViewApp = require('./components/userView/UserViewApp.jsx');
var GroupApp = require('./components/groupPage/groupApp.jsx');
var Store = require('./store');
var Pusher = require('pusher-js');
var ChatApp=require('./components/groupPage/pusherChat.jsx');

var Router=Backbone.Router.extend({
	initialize:function() {
		Backbone.history.start({pushState:true});
	},
	routes:{
		'userView/:id':'userView',
		'group/:userId': 'group',
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
			console.log(data[0].user.username)
			var loggedIn = _.extend(Store.data, {userId: data[0].user.id});
			var userName = _.extend(Store.data, {userName: data[0].user.username});
			console.log(loggedIn);
			console.log(userName);
			var rank = data[0].rank;
			var exp = data[0].exp;
			console.log(rank +"xp" +exp);

			var name=data[0].user.first_name;
			var friends=(data[0].user.friend_set);
			var groups=(data[0].user.group_set);
			var mapped=data[0].user.goal_set;
			ReactDOM.render(<ProfileApp rank={rank}  exp={exp} router={router} username={username} name={name} goals={mapped} friends={friends} groups={groups}/>,document.getElementById('container'));

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
			var posts=test[0].user.post_set;

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
			var myId = Store.data.userId;
			console.log(myId);
			
			ReactDOM.render(<UserViewApp posts={post} goals={goals} name={name} router={router} username={username} userId={userId} myId={myId}/>,document.getElementById('container'));





			}
});

});



router.on('route:group', function(groupId){
 
 var ChatMessage = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/messages/group/?group=' +groupId
		});

		var ChatCollection = Backbone.Collection.extend({
			Model:ChatMessage,
			url:'https://safe-brook-9891.herokuapp.com/api/messages/group/?group=' +groupId

		})
		var Chat = new ChatCollection();
		Chat.fetch({
			success: function(resp) {
				var data = resp.toJSON();
				
				ReactDOM.render(<ChatApp chat={data} channel={channel} groupId = {groupId} />, document.getElementById('chat'));
				
			}
		});

 var pusher = new Pusher('aa48a322f5c5c64fe315');
 var channel = pusher.subscribe('group_' + groupId);
 var eventName = 'new-message';

 var callback = function(data) {
  	var ChatMessage = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/messages/group/?group=' +groupId
		});

		var ChatCollection = Backbone.Collection.extend({
			Model:ChatMessage,
			url:'https://safe-brook-9891.herokuapp.com/api/messages/group/?group=' +groupId

		})
		var Chat = new ChatCollection();
		Chat.fetch({
			success: function(resp) {
				var data = resp.toJSON();
				ReactDOM.render(<ChatApp chat={data} channel={channel} groupId = {groupId} />, document.getElementById('chat'));
				
				
			}
		})

  };
  pusher.bind(eventName, callback);

	var groupView = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/groups/'+ groupId
		})
		var GroupCollection = Backbone.Collection.extend({
			Model:groupView,
			url:'https://safe-brook-9891.herokuapp.com/api/groups/'+ groupId
		})
		var GroupData = new GroupCollection();
		GroupData.fetch({
			success: function(resp) {

				var test = resp.toJSON();
				var posts=test[0].post_set;
				var users = test[0].user;
				var userName = Store.data.userName;
				var chatList = Store.data.chats;
				var chatInit = Store.data.chatInit;
				
				var groupId = posts[0].group;
				ReactDOM.render(<GroupApp posts={posts} groupId={groupId} router={router} users={users} channel={channel} username={userName} chatList={chatList} chatInit={chatInit}/>,document.getElementById('container'));


			}
		})
});





module.exports = Router;
