var React = require('react');

var Greeting = React.createClass({
	render: function() {
		return(<p> Hello {this.props.name}!</p>)
	}
})

module.exports = Greeting;