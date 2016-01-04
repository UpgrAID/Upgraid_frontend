var React = require('react');
var FriendList = require('./friendList.jsx');
var ToFriendList = require('./toFriendList.jsx');
var ViewMessage = require('./viewMessage.jsx');

var MessageApp = React.createClass({
	getInitialState: function(){
		return({
			friend: '',
			id: null,
			message: '',
			hidden: false
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
	_hideShow: function(){
		this.setState({
			hidden: true
		})
		if(this.state.hidden){
			this.setState({
			hidden: false
		})
		}
	},
	_send: function(e){
		e.preventDefault();

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

				$('#message').val('')
			}
		})
	},
	render:function(){
		var that = this;

		return(
			<div id="messageContainer">
			<h2 id="sendMessage" onClick={this._hideShow}>Send Message</h2>
				<span id="friendSelect">{this.state.friend}</span>
				{this.state.hidden ? null :
				<div id="hideMessage">
					<form onSubmit={this._send}>
					<input id="message" placeholder="send a message" onChange={this._message}/>
					</form>
					<ul id="friendListMessage">
						{this.props.fromFriends.map(function(obj){
							return(<li key={obj.id}><FriendList  id={obj.from_friend.id} fromFriend={obj.from_friend.username} friendSelect={that._friendSelect}/></li>)
						})}
						{this.props.toFriends.map(function(obj){
							return(<li key={obj.id}><ToFriendList id={obj.to_friend.id} toFriend={obj.to_friend.username} friendSelect={that._friendSelect}/></li>)
						})}
					</ul>
				<ViewMessage username={that.props.username}/>
				</div>}
			</div>
				)
	}
});

module.exports = MessageApp;