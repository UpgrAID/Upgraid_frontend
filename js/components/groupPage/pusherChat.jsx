var React = require('react');


var PusherChat = React.createClass({

	getInitialState: function() {
		return({
			newChat: this.props.chat,
			hidden: true
				})
	},
	_hide:function(){
		this.setState({hidden: !this.state.hidden});

	},
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
			channel: this.props.channel.name,
			event: 'new-message',
		})

		chat.save({}, {
			success: function(resp) {
				$('#chatInput').val('')
			}
		})

	},
	render: function() {

		return(<div id="chatContain">
					<h2 id="chatHeader" onClick={this._hide}>Chat</h2>
					{(this.state.hidden ? null :

						<div>
							<div id="messageContain">

							{this.props.chat.map(function(obj){
							return(<p className="message" key={obj.id}><span className="userNameChat">{obj.user}</span>{obj.message}</p>)
						})}
							</div>

							<form onSubmit={this._submit}>
								<input id="chatInput" placeholder="Chat here"/>
							</form>
						</div>)}
			</div>
		)
	}
});

module.exports = PusherChat;
