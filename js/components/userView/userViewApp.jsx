var React = require('react');
var Backbone = require('backbone');
var OtherPosts= require('../../components/profilePage/post/othersPosts.jsx');
var OtherGoals= require('../../components/profilePage/goalList/othersGoals.jsx');
var NameTag = require('./nameTag.jsx');
var NavUserView = require('../../components/nav/navUserView.jsx');
var Friendly = require('../../models/friendly');
var AddFriend = require('../userView/addFriend/addFriend.jsx');
var AvatarRankXp = require('../../components/profilePage/avatarRankXp/avatarRankXp.jsx');
var FriendsUser= require('./friendsUserView/friendsUser.jsx');
var GroupsUser = require('./groupsUserView/groupsUser.jsx')
var ProfileLeft = require('../profilePage/profileLeft.jsx');
var UserViewApp = React.createClass({
	getInitialState: function(){
		return {
			frnds: null
		}
	},
	_isFriend: function(){
		this.setState({frnds: true});
	},

	componentWillMount: function(){
		var props = this.props;
		var self = this;



		var Friendlies = Backbone.Collection.extend({
			url: 'https://safe-brook-9891.herokuapp.com/api/friends/?username=' + this.props.username,
			model: Friendly
		});

		friendList = new Friendlies();

		friendList.fetch({
			success: function(resp){
				friends = resp.toJSON();
					friends.forEach(function(obj){
						if(obj.from_friend == props.userId || obj.to_friend == props.userId && obj.accepted) {
							self._isFriend();
						}
					});
			}
		});
	},
	render:function() {

		return (
			<div>
				<NavUserView
					router={this.props.router}
					username={this.props.username}
					userId={this.props.userId}
					myId={this.props.myId}
					friend={this.state.frnds}/>

				<ProfileLeft
					username={this.props.username}
					rank={this.props.pRank}
					exp={this.props.pExp}
					goals={this.props.pGoals}
					router={this.props.router}
					fromFriends={this.props.fromFrProfile}
					toFriends={this.props.toFrProfile}
					name={this.props.pName}
					avatar={this.props.pAvatar}/>

				<NameTag user={this.props.name}/>

				<AvatarRankXp
					rank={this.props.rank}
					exp={this.props.exp}/>

				<FriendsUser
					theirName = {this.props.name}
					fromFriends={this.props.fromFriends}
					toFriends={this.props.toFriends}
					router={this.props.router}/>

				<GroupsUser
					theirName={this.props.name}
					groups={this.props.groups}
					goals={this.props.groups}
					router={this.props.router}/>

				<OtherPosts posts={this.props.posts}/>

				<OtherGoals goals={this.props.goals}/>

			</div>
		)
	}
});

module.exports = UserViewApp;
