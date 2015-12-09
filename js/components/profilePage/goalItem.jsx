var React = require('react');
var Goals = require('../../models/goals');
var Backbone = require('backbone');

var GoalItem = React.createClass({
	
	render: function() {
		var props = this.props;
		console.log(props);
		var test=props.data.map(function(obj){
			return(<li>{obj.title}</li>)
		})
		return(<div>{test}</div>)
	}
})

module.exports= GoalItem;

