var React = require('react');

var Greeting = React.createClass({
	render: function() {
		return(<div id="greeting"><p> Hello {this.props.name}!</p></div>)
	}
})

module.exports = Greeting;
