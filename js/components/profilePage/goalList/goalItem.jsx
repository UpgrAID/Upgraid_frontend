var React = require('react');
var Item = require('./item.jsx')

var GoalItem = React.createClass({
	
	render: function() {
		var props =this.props;
		return(<ul key={this.props.objectId} className="goalContainer">
				{this.props.data.map(function(obj){
					return(<Item addInput={props.addInput} data={obj.title} datas={props.data} id={obj.id}/>)
				})}	
				</ul>

			)
	}
})

module.exports= GoalItem;
