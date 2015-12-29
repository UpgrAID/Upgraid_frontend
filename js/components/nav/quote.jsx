var React = require('react');

var Quote = React.createClass({
	render:function() {
		return(<p id="randomQuote">{this.props.quote}</p>)
	}
});

module.exports = Quote;