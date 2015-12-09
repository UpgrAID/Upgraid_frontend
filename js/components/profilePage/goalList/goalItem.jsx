var React = require('react');
var Item = require('./item.jsx')

var GoalItem = React.createClass({
	
	render: function() {

		return(<ul key={this.props.objectId} className="goalContainer">
				{this.props.data.map(function(obj){
					return(<Item data={obj.title} id={obj.id}/>)
				})}	
				</ul>

			)
	}
})

module.exports= GoalItem;

