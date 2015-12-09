var React = require('react');
var Item = React.createClass({
	_delete: function(e) {
		e.preventDefault();
		var props=this.props;
		console.log(props);
		var Goal = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/goals/'+props.id,
			initialize: function() {
			console.log('Making Goal.')
	}
			
		});
		var GoalCollection = Backbone.Collection.extend({
			model: Goal
			
		});

		var collection = new GoalCollection(this.props);
		
		var item = collection.get(props.id);
		console.log(item);
		
		
		item.destroy({
			success: function() {

				props.addInput(collection.toJSON());
			}
		})
	},
	render: function() {
		
	return(<li>
		<input type="checkbox" id={this.props.objectId}/>
		<label htmlFor={this.props.objectId}>{this.props.data}</label>
		<button className="delete" onClick={this._delete}>Delete</button>
		</li>)
			
	}
})

module.exports= Item;