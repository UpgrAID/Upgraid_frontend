var React = require('react');
var OtherPosts= require('../../components/profilePage/post/othersPosts.jsx');
var OtherGoals= require('../../components/profilePage/goalList/othersGoals.jsx');
var Greeting = require('../../components/profilePage/greeting.jsx');
var NavUserView = require('../../components/nav/navUserView.jsx');
var Friendlies = require('../../collections/friendlies');
var AddFriend = require('../userView/addFriend/addFriend.jsx');
var AvatarRankXp = require('../../components/profilePage/avatarRankXp/avatarRankXp.jsx');
var Friends= require('../../components/profilePage/friends/friends.jsx');
var Group= require('../../components/profilePage/groups/groups.jsx');

var UserViewApp = React.createClass({
	getInitialState: function(){
		return {
			frnds: null
		}
	},
	_isTrue: function(fr){
		this.setState({frnds: fr});
	},
	componentWillMount: function(){
		var props = this.props;
		var self = this;
		friendList = new Friendlies();
		friendList.fetch({
			success: function(resp){
				fr = resp.toJSON();
			var frs = fr.filter(function(f){
				if (props.userId == f.to_friend && props.myId === f.from_friend){
					self._isTrue(true);
				}
			})
			}
		})
	},
	render:function() {

		return (
			<div>
				<NavUserView router={this.props.router} username={this.props.username}/>
				<AvatarRankXp rank={this.props.rank} exp={this.props.exp}/>
				<Greeting name={this.props.name}/>
				<Friends fromFriends={this.props.fromFriends} toFriends={this.props.toFriends} router={this.props.router}/>
				<Group groups={this.props.groups} router={this.props.router}/>
				<OtherPosts posts={this.props.posts}/>
				<OtherGoals goals={this.props.goals}/>
				{this.state.frnds ? null :
				<AddFriend userId={this.props.userId} myId={this.props.myId}/>}
			</div>
		)
	}
});

module.exports = UserViewApp;
