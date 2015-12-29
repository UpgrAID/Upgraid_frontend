var React = require('react');

var Test = React.createClass({
	render:function() {

		return(<div id="userChoice"><p>{this.props.username}</p></div>)


	}
});

module.exports = Test;
