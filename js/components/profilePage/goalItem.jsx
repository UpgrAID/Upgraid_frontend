var React = require('react');
var Goals = require('../../models/goals');
var Backbone = require('backbone');
var Item = require('./item.jsx')

var GoalItem = React.createClass({
	
	render: function() {

		return(<ul key={this.props.objectId} className="listContainer">
				{this.props.data.map(function(obj){
					return(<Item data={obj.title} id={obj.id}/>)
				})}	
				</ul>

			)
	}
})

module.exports= GoalItem;

