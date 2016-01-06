var React = require('react');

var Item = React.createClass({
	getInitialState: function() {
		return{value: $('.categoryLabel').val(),
				category: this.props.category,
				theme: null
			}
	},
	_completed: function(e) {
		e.preventDefault();
		console.log('test')
		props=this.props;
		this.setState({
			theme: this.props.theme
		})

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
			'theme':this.props.theme,
			 'completed': true
		});
		item.save({},{
			success: function(resp) {
			}
		})
		collection.add(item);
		props.addInput(collection.toJSON());

		this.setState({
			value:''
		})
	},
	_navGroup: function(){

	},
	componentDidMount: function(){
		var count=[];
		count.push(this.props.completed)

	},
	render: function() {

		return (<div>{(this.props.completed ? null :
					(<li className="goalItem">

						<label className="categoryLabel"htmlFor={this.props.objectId} value={this.props.data} onClick={this._navGroup}>{this.props.data}</label>
						<button className="delete entypo-check" onClick={this._completed} value={this.props.theme}></button>
					</li>))}
				</div>)

	}
})

module.exports= Item;
