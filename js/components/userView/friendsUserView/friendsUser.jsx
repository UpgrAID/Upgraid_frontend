var React = require('react');
var FriendsUserBtn = require('./fromFriendsBtn.jsx');
var ToFriendUserBtn = require('./toFriendsBtn.jsx');

var FriendsUser = React.createClass({

	render: function() {
		props=this.props;
		
		var test=this.props.fromFriends.map(function(obj){
			return(<li key={obj.id} className="friendListItemUser"><FriendsUserBtn friendName={obj.from_friend.username} id={obj.from_friend.id}  router={props.router} /></li>)
					})
		var toFriends = this.props.toFriends.map(function(obj){
			return(<li key={obj.id} className="friendListItemUser"><ToFriendUserBtn toFriend={obj.to_friend.username} id={obj.to_friend.id} router={props.router} /></li>)
		})
				return(<div id="friendsContainerUser">
					<h2 id='friendsHeaderUser'>Their Friends</h2>
					<div id="listContainUser">
						<div id="containUser">
							<ul id="friendsUlUser">
								{test}
								{toFriends}
							</ul>
						</div>
					</div>
					</div>)
	}
});

module.exports = FriendsUser;