var React = require('react');
var FriendList = require('./friendList.jsx');
var ToFriendList = require('./toFriendList.jsx');


var MessageApp = React.createClass({
	getInitialState: function(){
		return({
			friend: ''
		})
	},
	_friendSelect: function(e) {
		this.setState({
			friend: e.target.value
		})
		console.log(e.target.name)
	},
	_send: function(e){
		
	},
	render:function(){
		var that = this;
		return(
			<div id="messageContainer">
			<p>Send Message</p>
			<p>{this.state.friend}</p>
				<input id="message" onSubmit={this._send} placeholder="send a message"/>
			<ul>	
				{this.props.fromFriends.map(function(obj){
					return(<li><FriendList key={obj.id}  id={obj.id} fromFriend={obj.from_friend.username} friendSelect={that._friendSelect}/></li>)
				})}
				{this.props.toFriends.map(function(obj){
					return(<li><ToFriendList key={obj.id} id={obj.id} toFriend={obj.to_friend.username} friendSelect={that._friendSelect}/></li>)
				})}
			</ul>

			</div>
				)
	}
});

module.exports = MessageApp;