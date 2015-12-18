var React = require('react');

var Item = React.createClass({
	getInitialState: function() {
		return{value: $('.categoryLabel').val(),
				category: this.props.category,
			}
	},
	_completed: function(e) {
		e.preventDefault();
		props=this.props;
		var Goal = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/goals/'+props.id,
			initialize: function() {

				}


			})


		
		var GoalCollection = Backbone.Collection.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/goals/'+props.id,
			model: Goal

		});
		
		var collection = new GoalCollection(this.props.datas);
		
		var item = collection.get(props.id);
		item.set({
			'title':this.props.data,
			'theme':this.state.category,
			 'completed': true
		});
		item.save({},{
			success: function(resp) {
				console.log(resp);
			}
		})
		collection.add(item);
		props.addInput(collection.toJSON());

		this.setState({
			value:''
		})
	},
	render: function() {
		
		return (<div>{(this.props.completed ? null :
					(<li className="goalItem">
						
						<label className="categoryLabel"htmlFor={this.props.objectId} value={this.props.data}>{this.props.data}</label>
						<button className="delete" onClick={this._completed}>Completed</button>
					</li>))}
				</div>)

	}
})

module.exports= Item;
