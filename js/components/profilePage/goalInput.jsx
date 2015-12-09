var React = require('react');

var GoalInput = React.createClass({
	_submit: function(e) {
		e.preventDefault();
		var Goal = Backbone.Model.extend({
		url:'https://safe-brook-9891.herokuapp.com/api/goals/',
		initialize: function() {
		console.log('Making Goal.')
		}	
	});

		var test = new Goal();
		test.set({
			title:$('#goalInput').val()
		})
		test.save({}, {
			success: function(resp) {
				console.log(resp);
			}
		})
},
	render: function() {
		return(
			<form method='POST'onSubmit={this._submit}>
			<input id="goalInput" placeholder='test'/>
			</form>)
	}
});

module.exports = GoalInput;