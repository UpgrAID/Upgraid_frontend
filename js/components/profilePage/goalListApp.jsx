var React = require('react');
var GoalInput = require('./goalInput.jsx');
var GoalItem = require('./GoalItem.jsx');


var GoalList = React.createClass({
	render: function() {
		return(
			<div>
			<GoalInput/>
			<ul>
			<GoalItem/>
			</ul>
			</div>
			)
	}
})

module.exports = GoalList;