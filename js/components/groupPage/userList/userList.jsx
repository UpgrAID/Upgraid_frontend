var React = require('react');
var User = require('./user.jsx');
var UserList = React.createClass({
	render:function() {
		var props=this.props;
			return(
				<div id="userListContainer">
				<h2 id="members">Members</h2>
				<ul id="userListUl">
					{this.props.users.map(function(obj){
						return(
							<User key={obj.id} username={obj.username} id={obj.id} router={props.router}/>)
					})}
				</ul>
				</div>
				)
	}
});

module.exports = UserList;
