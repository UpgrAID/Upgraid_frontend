var React = require('react');

var GoalInput = React.createClass({
	getInitialState: function(e) {
		return {value: ""}
	},
	_onChange: function(e) {
		this.setState({
			value: e.target.value
		})
	},
	_submit: function(e) {
		e.preventDefault();
		var props=this.props;
		var Goal = Backbone.Model.extend({
		url:'https://safe-brook-9891.herokuapp.com/api/goals/',
		initialize: function() {
		console.log('Making Goal.')
		}	
	});
		var GoalCollection = Backbone.Collection.extend({
			model: Goal
			
		});

		var collection = new GoalCollection(this.props.data);
		console.log(collection);
		
		var test = new Goal();
		test.set({
			'title':this.state.value
		})
		test.save({}, {
			success: function(resp) {
				collection.add(resp);
				props.addInput(collection.toJSON());
			}
		})
},
	render: function() {
		return(
			<form method='POST'onSubmit={this._submit}>
			<input id="goalInput" placeholder='test' onChange={this._onChange} value={this.state.value}/>
			</form>)
	}
});

module.exports = GoalInput;