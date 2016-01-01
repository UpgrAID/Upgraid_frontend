var React = require('react');
var PostListApp = require('../profilePage/post/PostListApp.jsx');
var UserList = require('./userList/userList.jsx');
var Nav = require('../nav/nav.jsx');
var NavUserView = require('../nav/navUserView.jsx');
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
		console.log('a',this.props.data)
		return(<div>
				<NavUserView router={this.props.router} username={this.props.username}/>
				<UserList users={this.props.users} router={this.props.router} data={this.props.data} groupList={this.state.groupList}/>
				<PostListApp posts={this.props.posts} groupId = {this.props.groupId} data={this.props.data}/>


			</div>)
	}
});

module.exports = GroupApp;

//<PusherChat groupId = {this.props.groupId} channel={this.props.channel} chatInit={this.props.chatInit} chatList={this.props.chatList}/>
