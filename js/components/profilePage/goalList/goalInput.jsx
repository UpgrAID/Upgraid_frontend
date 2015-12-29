var React = require('react');

var GoalInput = React.createClass({

	getInitialState: function(e) {
		return {value: "",
				category:null,
				router: this.props.router
		}
	},
	_onChange: function(e) {

		this.setState({
			value: e.target.value
		})

	},
	_setValue: function(e) {

		this.setState({
			category: e.target.value
		})

	},
	_submit: function(e) {
		e.preventDefault();
		var state=this.state;
		var props = this.props;
		var Goal = Backbone.Model.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/goals/',
			initialize: function() {
			}

		});
		var GoalCollection = Backbone.Collection.extend({
			url:'https://safe-brook-9891.herokuapp.com/api/goals/',
			model: Goal

		});

		var collection = new GoalCollection();
		collection.fetch({}, {
			success: function(resp) {
			}
		})
		var test = new Goal();
		test.set({

			'title':this.state.value,
			'theme':this.state.category

		})
		test.save({}, {
			success: function(resp) {
				collection.add(resp);
				var test = 	resp.toJSON();
				var groupId = test.group;
				props.addInput(collection.toJSON());
				$('#goalInput').val('');

				state.router.navigate('group/' + groupId, {trigger: true});
			}
		})
},
	render: function() {
		return(
			<form id="setGoal" method='POST' onSubmit={this._submit}>
			<input id="goalInput" placeholder='Set a Goal here...' onChange={this._onChange} value={this.state.value}/>
			<p className="selectCategory">Please Select a Category</p>

			<input type='radio' className='theme' onClick={this._setValue} checked={this.state.radio}value='1'/>
			<label className="selectCategory">Skills</label>
			<input type='radio' className='theme' onClick={this._setValue} value='2'/>
			<label className="selectCategory">Bad Habits</label><br/>
			<input type='radio' className='theme' onClick={this._setValue} value='3'/>
			<label className="selectCategory">Health and Fitness</label>
			<button id="goalSubmit">Submit</button>
			</form>)
	}
});

module.exports = GoalInput;
