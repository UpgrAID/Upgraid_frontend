var React = require('react');
var FriendsBtn = require('./friendsBtn.jsx');
var ToFriendBtn = require('./toFriendBtn.jsx');

var Friends = React.createClass({

	render: function() {
		props=this.props;
		
		var test=this.props.fromFriends.map(function(obj){
			return(<li key={obj.id} className="friendListItem"><FriendsBtn friendName={obj.from_friend.username} id={obj.from_friend.id}  router={props.router} id={obj.id}/></li>)
					})
		var toFriends = this.props.toFriends.map(function(obj){
			return(<li key={obj.id} className="friendListItem"><ToFriendBtn toFriend={obj.to_friend.username} id={obj.to_friend.id} router={props.router} /></li>)
		})
				return(<div id="friendsContainer">
					<h2 id='friendsHeader'>Friends</h2>
					<div id="listContain">
						<div id="contain">
							<ul id="friendsUl">
								{test}
								{toFriends}
							</ul>
						</div>
					</div>
					</div>)
	}
});

module.exports = Friends;
