var React = require('react');

//displays fromfriend button on messaging friendselect is a function 
//which passes the friends id to the message model.
var FriendList = React.createClass({

	render:function(){

		return(<div><button className="friendList" name={this.props.id} value={this.props.fromFriend} onClick={this.props.friendSelect}>{this.props.fromFriend}</button></div>)
	}
});

module.exports = FriendList;
