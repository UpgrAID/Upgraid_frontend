var React = require('react');
var PostListApp = require('../profilePage/post/PostListApp.jsx');
var GroupLeft = require('./groupLeft.jsx')
var Nav = require('../nav/nav.jsx');
var NavGroupView = require('../nav/navGroupView.jsx');
var Store = require('../../store.js')

var GroupApp = React.createClass({
	getInitialState: function() {
		return({
			groupList: []
		})
	},
	_groupList: function() {
		this.setState({
			groupList: Store.data.userList
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
				var users=resp.toJSON();
				var userData=users[0].user;
				var users = _.extend(Store.data, {userList: userData});
				that._groupList();

			}
		})
	},
	render:function() {
		return(
			<div>
				<NavGroupView router={this.props.router} username={this.props.username}/>
				<GroupLeft users={this.props.users} router={this.props.router} posts={this.props.posts} groupList={this.state.groupList}/>
				<PostListApp posts={this.props.posts} groupId = {this.props.groupId} username={this.props.username}/>
			</div>
			)
	}
});

module.exports = GroupApp;

//<PusherChat groupId = {this.props.groupId} channel={this.props.channel} chatInit={this.props.chatInit} chatList={this.props.chatList}/>
