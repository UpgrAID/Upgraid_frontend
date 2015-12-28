var React = require('react');

var Test = React.createClass({
	render:function() {
			
		return(<div><p>{this.props.username}</p></div>)
		
				
	}
});

module.exports = Test;