var React = require('react');
var ReactDOM = require('react-dom');
var Backbone= require('backbone');
var LoginRegApp = require('./components/loginRegistration/loginRegApp.jsx');
var ProfileApp=require('./components/profilePage/profileApp.jsx');
var UserViewApp = require('./components/userView/UserViewApp.jsx');
var GroupApp = require('./components/groupPage/groupApp.jsx');
var Store = require('./store');
var Pusher = require('pusher-js');
var ChatApp=require('./components/groupPage/pusherChat.jsx');
var Friendlies = ('./collections/friendlies');

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
		ReactDOM.render(<LoginRegApp router={this}/>, document.getElementById('page-wrapper'));

	}
});

var router = new Router();




router.on('route:profile', function(username){

	$('#chat').hide()
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
			var loggedIn = _.extend(Store.data, {userId: data[0].user.id});
			var userName = _.extend(Store.data, {userName: data[0].user.username});
			var posts=data[0].user.post_set;
			var rank = data[0].rank;
			var exp = data[0].exp;
			var uid = data[0].user.id;

			var name=data[0].user.first_name;
			var fromFriends=data[0].user.to_friend_set;
			var toFriends = data[0].user.friend_set;
			var fromFriendsMap = fromFriends.filter(function(obj){
				if(obj.accepted===true) {
					return true
				}
			});
			var toFriendsMap = toFriends.filter(function(obj){
				if(obj.accepted===true) {
					return true
				}
			});


			var goalInfo=data[0].user.goal_set;
			var incomplete = goalInfo.filter(function(obj){
				if(obj.completed===false) {
					return obj
				}
			})
			
			var groups=data[0].user.group_set;



			ReactDOM.render(<ProfileApp rank={rank} users={Store.data.users} exp={exp} router={router} username={username} name={name} goals={incomplete} fromFriends={fromFriendsMap} fromAll={fromFriends} toFriends={toFriendsMap} groups={groups} posts={posts} userId={uid}/>,document.getElementById('container'));


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
		$('#chat').hide()

		var userView = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/profiles/?user='+userId
		})
		var UserCollection = Backbone.Collection.extend({
			Model:userView,
			url:'https://safe-brook-9891.herokuapp.com/api/profiles/?user='+userId
		})
		var UserProfile = new UserCollection();
		UserProfile.fetch({
			success: function(resp) {
			var users=resp.toJSON();


			var name = users[0].user.first_name;
			var fromFriends = (users[0].user.to_friend_set);
			var toFriends = users[0].user.friend_set;
			var fromFriendsMap = fromFriends.filter(function(obj){
				if(obj.accepted) {
					return true
				}
			});
			var toFriendsMap = toFriends.filter(function(obj){
				if(obj.accepted) {
					return true
				}
			});
			var groups=(users[0].user.group_set);
			var post= users[0].user.post_set;
			var rank = users[0].rank;
			var exp = users[0].exp;
			var goals = users[0].user.goal_set;
			var goalsMapped = goals.filter(function(obj){
				if(obj.completed===false) {
					return true;
				}
			})



			var myId = Store.data.userId;
			var username = Store.data.userName;

			ReactDOM.render(<UserViewApp rank={rank}  exp={exp} posts={post} goals={goalsMapped} name={name} router={router} username={username} userId={userId} myId={myId} fromFriends={fromFriendsMap} toFriends={toFriendsMap} groups={groups}/>,document.getElementById('container'));


			}
	});

});



router.on('route:group', function(groupId){
$('#chat').show()

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
				var dataReverse = data.reverse();
				ReactDOM.render(<ChatApp chat={dataReverse} channel={channel} groupId = {groupId} />, document.getElementById('chat'));

			}
		});


 var pusher = new Pusher('4ddbac2023fa2cbd0fa7');
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
				var dataReverse = data.reverse();
				ReactDOM.render(<ChatApp chat={data} channel={channel} groupId = {groupId} />, document.getElementById('chat'));


			}
		})

  };
  pusher.bind(eventName, callback);



	var groupPost = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/posts/?group='+ groupId
		})
		var GroupPostCollection = Backbone.Collection.extend({
			Model:groupPost,
			url:'https://safe-brook-9891.herokuapp.com/api/posts/?group='+ groupId
		})
		var GroupPosts = new GroupPostCollection();
		GroupPosts.fetch({
			success: function(resp) {

				var data = resp.toJSON();
				var posts = data.reverse();
				var userName = Store.data.userName;
				var chatList = Store.data.chats;
				var chatInit = Store.data.chatInit;

				var userList = Store.data.userList;





				ReactDOM.render(<GroupApp  posts={posts} groupId={groupId} router={router}  channel={channel} username={userName} chatList={chatList} chatInit={chatInit} userList={userList}/>, document.getElementById('container'));


			}
		})
});





module.exports = Router;
