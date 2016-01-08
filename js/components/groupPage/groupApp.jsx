var React = require('react');
var PostListApp = require('../profilePage/post/PostListApp.jsx');
var Nav = require('../nav/nav.jsx');
var NavGroupView = require('../nav/navGroupView.jsx');
var ProfileLeft = require('../profilePage/profileLeft.jsx');
var UserList = require('./userList/userList.jsx')
var Store = require('../../store.js');

//renders the group app: contains profile left(a persistent nav) group posts and a list of members.
var GroupApp = React.createClass({
	getInitialState: function() {
		return({
			groupList: [],
			theme: null,

		})
	},
	_groupList: function(groupUserList, theme) {
		
		this.setState({
			groupList: groupUserList,
			theme: theme
		})
	},
	componentWillMount: function() {
		var groupUsers = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/groups/'+this.props.groupId
		})
		var GroupCollection = Backbone.Collection.extend({
			Model:groupUsers,
			url:'https://safe-brook-9891.herokuapp.com/api/groups/'+this.props.groupId
		})
		var GroupUserList = new GroupCollection();
		var that = this;
		GroupUserList.fetch({
			success:function(resp) {
				var group = resp.toJSON();
				var theme = group[0].theme;
				var userData=group[0].user;
				var users = _.extend(Store.data, {userList: userData});
				that._groupList(userData, theme);

			}
		})
	},
	render:function() {
		
		return(
			<div>
				<NavGroupView
					router={this.props.router}
					groupId={this.props.groupId}
					theme={this.state.theme}
					username={this.props.username}/>
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
				<PostListApp posts={this.props.posts} groupId = {this.props.groupId} username={this.props.username}/>
				<UserList groupList={this.state.groupList} router={this.props.router}/>
			</div>
			)
	}
});

module.exports = GroupApp;

//<PusherChat groupId = {this.props.groupId} channel={this.props.channel} chatInit={this.props.chatInit} chatList={this.props.chatList}/>
// <GroupLeft users={this.props.users} router={this.props.router} posts={this.props.posts} groupList={this.state.groupList}/>
