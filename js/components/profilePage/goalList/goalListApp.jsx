var React = require('react');
var ReactDOM = require('react-dom')
var GoalInput = require('./goalInput.jsx');
var GoalItem = require('./GoalItem.jsx');

var GoalList = React.createClass({
	getInitialState: function () {
		return {
			data: this.props.data,
			
		}
	},
	_addInput: function(collection) {
			this.setState({
			data: collection
		})

	},
	render: function() {
		return(
			<div>
				<h2>Your Goals</h2>
				<GoalInput data={this.state.data} addInput={this._addInput}/>
				<GoalItem data={this.state.data} addInput={this._addInput}/>
			</div>
			)
	}
})

module.exports = GoalList;
