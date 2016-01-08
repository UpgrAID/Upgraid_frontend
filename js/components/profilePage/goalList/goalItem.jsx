var React = require('react');
var Item = require('./item.jsx')

//goals are rendered the theme is passed along to item.
var GoalItem = React.createClass({

	render: function() {
		var props =this.props;
		
		return(<ul key={this.props.objectId} className="goalContainer">
				{this.props.data.map(function(obj){

					return(<Item  
								key={obj.id} 
								addInput={props.addInput} 
								data={obj.title} 
								datas={props.data} 
								theme={obj.theme} 
								id={obj.id} 
								completed={obj.completed} 
								router={props.router}/>)
				})}	


				</ul>

			)
	}
})

module.exports= GoalItem;
