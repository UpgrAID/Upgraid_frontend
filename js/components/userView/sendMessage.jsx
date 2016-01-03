var React = require('react');
var Message = require('../../models/message');


module.exports = React.createClass({
	getInitialState: function(){
		return {
			receiver: null,
			message: ""
		}
	},
	_handleInputChange: function(e){
		e.preventDefault();
		this.setState({message: e.target.value})
	},
	_sendMessage: function(e){
		e.preventDefault();
		newMessage = new Message();
		newMessage.set({
			receiver: this.state.receiver,
			message: this.state.message
		});
		newMessage.send();
		this.setState({message: ''})
	},

	render: function(){
		return (
			<div>
				<h3>Send a Message to this User</h3>
				<form id='privateMessage' onSubmit='this._sendMessage'>
				<input id='privateMessageInput' type='text' value={this.state.message} placeholder='Message...' onChange={this._handleInputChange} />
				</form>
			</div>
		)
	}
})
