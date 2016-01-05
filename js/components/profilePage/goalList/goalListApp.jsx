var React = require('react');
var ReactDOM = require('react-dom')
var GoalInput = require('./goalInput.jsx');
var GoalItem = require('./GoalItem.jsx');

var GoalList = React.createClass({
	getInitialState: function () {

		return {
			data: this.props.goals

		}
	},
	_addInput: function(collection) {
			this.setState({
			data: collection
		})

	},
	render: function() {
		return(
			<div id='goalContainer'>
				<h2 id="goalHeader">Your Goals</h2>

				<GoalItem data={this.state.data} addInput={this._addInput} router={this.props.router}/>
				<GoalInput data={this.state.data} router={this.props.router} addInput={this._addInput}/>


			</div>
			)
	}
})

module.exports = GoalList;
