var React = require('react');

var Item = React.createClass({
	// getInitialState: function() {

	// },
	_delete: function(e) {
		e.preventDefault();
		props=this.props;



		var Goal = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/goals/'+props.id,
			initialize: function() {

	}

		});
		var GoalCollection = Backbone.Collection.extend({
			model: Goal

		});

		var collection = new GoalCollection(this.props.datas);

		var item = collection.get(props.id);



		item.destroy({
			success: function(resp) {

				collection.remove(resp)
			
				props.addInput(collection.toJSON());

			}
		})
		this.setState({
			value:''
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
