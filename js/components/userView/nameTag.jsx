var React = require('react');

var NameTag = React.createClass({
	render: function() {
		return(
			<div id="greeting">
				<p> User: {this.props.user}</p>				
			</div>
		)
	}
})

module.exports = NameTag;
