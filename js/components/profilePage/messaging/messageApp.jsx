var React = require('react');
var FriendList = require('./friendList.jsx');
var ToFriendList = require('./toFriendList.jsx');


var MessageApp = React.createClass({
	getInitialState: function(){
		return({
			friend: '',
			id: null,
			message: ''
		})
	},
	_friendSelect: function(e) {
		this.setState({
			friend: e.target.value,
			id: e.target.name,
		})
		
	},
	_message: function(e){
		this.setState({
			message: e.target.value
		})
	},
	_send: function(e){
		e.preventDefault();
		console.log('test');
		var Message=Backbone.Model.extend({
			url:'http://safe-brook-9891.herokuapp.com/api/messages/user/'
		})
		var MessageCollection=Backbone.Collection.extend({
			url:'http://safe-brook-9891.herokuapp.com/api/messages/user/',
			model:Message
		})

		var sent = new Message();

		sent.set({
			sender: this.props.username,
			receiver: this.state.id,
			message: this.state.message
		})
		var that = this;
		sent.save({},
		{
			success: function(resp){
				console.log(resp.toJSON())
				$('#message').val('')
			}	
		})
	},
	render:function(){
		var that = this;
		return(
			<div id="messageContainer">
			<h2 id="sendMessage">Send Message</h2>
			<p id="friendSelect">{this.state.friend}</p>
				<form onSubmit={this._send}>
				<textarea id="message" placeholder="send a message" onChange={this._message}></textarea>
				</form>
			<ul id="friendListMessage">	
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