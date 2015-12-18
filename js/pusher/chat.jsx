var React = require('react');
var PusherConf = require('./pusher');


var Chat = React.createClass({
	render: function(){
		return (
			<div id="chatWindow">
				<div id="chatInput">
					<ul id="messages"></ul>
				    <form action="">
				      <input id="m" autocomplete="off" /><button>Send</button>
				    </form>
				</div>
			<div>

		)
	}
});

module.exports = Chat;
