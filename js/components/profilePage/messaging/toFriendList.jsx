var React = require('react');
var ToFriendList = React.createClass({
	render:function(){
		return(<div><button ref={this.props.toFriend} value={this.props.toFriend} onClick={this.props.friendSelect}>{this.props.toFriend}</button></div>)
	}
});

module.exports = ToFriendList;