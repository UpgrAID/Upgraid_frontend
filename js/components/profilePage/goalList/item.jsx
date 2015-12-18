var React = require('react');

var Item = React.createClass({
	// getInitialState: function() {

	// },
	_completed: function(e) {
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
		item.set({
			completed: 'true'
		});
		item.save({}, {
			success: function(resp){
				collection.remove(resp)
				props.addInput(collection.toJSON());
			}
		})
		this.setState({
			value:''
		})
	},
	render: function() {
		return (<div>{(this.props.completed ? null :
					(<li className="goalItem">
						<input type="checkbox" className="categoryCheckbox" id={this.props.objectId}/>
						<label className="categoryLabel"htmlFor={this.props.objectId}>{this.props.data}</label>
						<button className="delete" onClick={this._completed}>Completed</button>
					</li>))}
				</div>)

	}
})

module.exports= Item;
