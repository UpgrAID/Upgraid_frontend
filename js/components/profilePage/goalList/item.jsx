var React = require('react');

var Item = React.createClass({
	// getInitialState: function() {
	// 	console.log(this.props);
	// },
	_delete: function(e) {
		e.preventDefault();
		props=this.props;
		console.log('props');
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

		var collection = new GoalCollection(this.props.datas);
		console.log('propssss');
		console.log(this.props.datas);
		var item = collection.get(props.id);
		console.log(item.toJSON());
		
		
		item.destroy({
			success: function(resp) {
				console.log(resp);
				collection.remove(resp)
				console.log(collection.toJSON());
				props.addInput(collection.toJSON());

			}
		})
	},
	render: function() {
		
	return(<li className="goalItem">
		<input type="checkbox" id={this.props.objectId}/>
		<label htmlFor={this.props.objectId}>{this.props.data}</label>
		<button className="delete" onClick={this._delete}>Delete</button>
		</li>)
			
	}
})

module.exports= Item;