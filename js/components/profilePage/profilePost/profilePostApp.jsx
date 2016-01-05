var React = require('react');
var ProfileInput = require('./profileInput.jsx');
var ProfileItem = require('./profileItem.jsx');
var PostButtons = require('./postButtons.jsx')

var ProfilePostApp = React.createClass({
	getInitialState: function () {
		return {
			data: this.props.posts,

		}
	},
	_addInput: function(collection) {

			this.setState({
			data: collection
		})
	},
	render: function() {
		var props = this.props;
		var that = this;
		var state = this.state;
		return(<div id="profilePostMaster">
				
				{this.props.groups.map(function(obj){
 					return(
 						<div>
 						<ProfileInput/>
						<PostButtons key={obj.id} theme={obj.theme} id={obj.id} addInput={that._addInput} data={state.data}/>
						</div>
					)
 					})}
				
			</div>)
	}
});

module.exports = ProfilePostApp;
