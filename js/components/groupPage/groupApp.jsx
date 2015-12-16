var React = require('react');
var PostListApp = require('../profilePage/post/PostListApp.jsx');
var UserList = require('./userList/userList.jsx');
var GroupApp = React.createClass({
	render:function() {
		return(<div>
				<PostListApp posts={this.props.posts} groupId = {this.props.groupId}/>
				<UserList users={this.props.users} router={this.props.router}/>
			</div>)
	}
});

module.exports = GroupApp;