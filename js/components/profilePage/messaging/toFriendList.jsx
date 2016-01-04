var React = require('react');
var ToFriendList = React.createClass({

	render:function(){

		return(<div><button className="friendList" name={this.props.id} value={this.props.toFriend} onClick={this.props.friendSelect}>{this.props.toFriend}</button></div>)
	}
});

module.exports = ToFriendList;