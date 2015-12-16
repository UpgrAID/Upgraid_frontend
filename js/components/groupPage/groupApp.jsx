var React = require('react');
var PostListApp = require('../profilePage/post/PostListApp.jsx');
var UserList = require('./userList/userList.jsx');
var Nav = require('../nav/nav.jsx');
var GroupApp = React.createClass({
	render:function() {
		return(<div>
				<Nav router={this.props.router} username={this.props.username}/>
				<PostListApp posts={this.props.posts} groupId = {this.props.groupId}/>
				<UserList users={this.props.users} router={this.props.router}/>
			</div>)
	}
});

module.exports = GroupApp;