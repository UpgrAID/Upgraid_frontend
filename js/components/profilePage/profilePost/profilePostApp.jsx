var React = require('react');
var ProfileInput = require('./profileInput.jsx');
var ProfileItem = require('./profileItem.jsx');

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
		return(<div id="profilePostMaster">
				<ProfileInput/>
				<ProfileItem data={this.state.data}/>
			</div>)
	}
});

module.exports = ProfilePostApp;