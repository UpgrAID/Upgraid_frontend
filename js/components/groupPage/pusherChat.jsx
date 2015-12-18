var React = require('react');




var PusherChat = React.createClass({
	_submit: function(e) {
		console.log(this.props.groupId);
		e.preventDefault();
		var ChatMessage = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/messages/group/'
		});

		var ChatCollection = Backbone.Collection.extend({
			Model:ChatMessage,

		})

		var chat = new ChatMessage;

		chat.set({
			group:this.props.groupId,
			message:$('#chatInput').val(),
			channel: this.props.channel.name,
			event: 'new-message',
		})


		chat.save({}, {
			success: function(resp) {
				console.log(resp);
			}
		})
		
	 
		
	},
	render: function() {
		console.log(this.props);
		return(<div id="chatContain">
				<div id="messageContain">
				{this.props.chat.map(function(obj){
					return(<p className="message">{obj.message}</p>)
				})}
				</div>
				<form onSubmit={this._submit}>
				
				<input id="chatInput"/>
				</form>
				</div>)
	}
});

module.exports = PusherChat;