var React = require('react');


var PusherChat = React.createClass({
	_submit: function(e) {
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
			channel: channel.name,
			event: 'new-message',
		})

		chat.save({}, {
			success: function(resp) {
			}
		})

	},
	render: function() {
		return(
			<div id="chatContain">
				<div id="messageContain"></div>
				<form onSubmit={this._submit}>
					<input id="chatInput"/>
				</form>
			</div>
		)
	}
});

module.exports = PusherChat;
