var React = require('react');


//renders goal input a theme and title are sent to api.
//on success of goal creation, users are routed to group 
//page with other people with similiar goals.
//sets and uploads new user goals

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

			'title': this.state.value,
			'theme': this.state.category

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

			<input id="goalInput" placeholder='Set a goal to accomplish...' onChange={this._onChange} value={this.state.value}/>

			<div id="radioContain">
				<input type='radio' className='theme' name='category' onClick={this._setValue} checked={this.state.radio}value='1'/>
				<label className="selectCategory">Skills</label>
				<input type='radio' name="category" className='theme' onClick={this._setValue} value='2'/>
				<label className="selectCategory">Bad Habits</label>
				<input type='radio' name="category" className='theme' onClick={this._setValue} value='3'/>
				<label className="selectCategory">Health/Fitness</label>
			</div>
				<div id="pleaseSelect">Please Select a Category</div>
			<button id="goalSubmit">Submit</button>

			</form>)
	}
});

module.exports = GoalInput;
