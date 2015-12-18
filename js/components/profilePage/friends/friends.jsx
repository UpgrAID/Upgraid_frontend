var React = require('react');
var FriendsBtn = require('./friendsBtn.jsx');

var Friends = React.createClass({

	render: function() {
		props=this.props;
		var test=this.props.friends.map(function(obj){
			return(<li key={obj.id} className="friendListItem"><FriendsBtn friendName={obj.to_friend.username} data={obj.to_friend.id}  router={props.router}/></li>)
					})

				return(<div id="friendsContainer">
					<h2>Friends</h2>
					<div id="listContain">
					<ul id="friendsUl">
						{test}
					</ul>
					</div>
					</div>)
	}
});

module.exports = Friends;
