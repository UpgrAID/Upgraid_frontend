var React = require('react');
var ReactDOM = require('react-dom')
var GoalInput = require('./goalInput.jsx');
var GoalItem = require('./GoalItem.jsx');


var GoalList = React.createClass({
	render: function() {
		return(
			<div>
			<GoalInput/>
			<ul>
			<GoalItem data={this.props.data}/>
			</ul>
			</div>
			)
	}
})

module.exports = GoalList;
