var React = require('react');
var PostListApp = require('../profilePage/post/PostListApp.jsx');
var UserList = require('./userList/userList.jsx');
var Nav = require('../nav/nav.jsx');
var NavUserView = require('../nav/navUserView.jsx');
var PostCollection = require('../../collections/postCollection');


var GroupApp = React.createClass({
	
	render:function() {
		return(<div>
				<NavUserView router={this.props.router} username={this.props.username}/>
				<UserList users={this.props.users} router={this.props.router}/>
				<PostListApp posts={this.props.posts} groupId = {this.props.groupId}/>

			</div>)
	}
});

module.exports = GroupApp;

//<PusherChat groupId = {this.props.groupId} channel={this.props.channel} chatInit={this.props.chatInit} chatList={this.props.chatList}/>
