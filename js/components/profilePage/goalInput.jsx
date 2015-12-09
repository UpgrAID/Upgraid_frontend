var React = require('react');

var GoalInput = React.createClass({
	_submit: function(e) {
		e.preventDefault();
},
	render: function() {
		return(
			<form method='POST'onSubmit={this._submit}>
			<input id="goalInput" placeholder='test'/>
			</form>)
	}
});

module.exports = GoalInput;