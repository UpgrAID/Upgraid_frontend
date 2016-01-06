var React = require('react');
var UserList = require('./userList/userList.jsx');
var GroupLeft = React.createClass({
	render:function(){
		return(
			<div id="groupLeft">
				<UserList users={this.props.users} router={this.props.router} posts={this.props.posts} groupList={this.props.groupList}/>
			</div>
			)
	}
});

module.exports = GroupLeft;