var React = require('react');
var FriendList = React.createClass({
	render:function(){
		return(<div><button ref={this.props.fromFriend} value={this.props.fromFriend} onClick={this.props.friendSelect}>{this.props.fromFriend}</button></div>)
	}
});

module.exports = FriendList;
