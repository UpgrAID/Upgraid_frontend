var React = require('react');

var NameTag = React.createClass({
	render: function() {
		return(
			<div id="usernameView">
				<p> User: {this.props.user}</p>				
			</div>
		)
	}
})

module.exports = NameTag;
