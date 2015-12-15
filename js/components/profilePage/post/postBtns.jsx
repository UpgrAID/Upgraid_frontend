var React = require('react');

var PostBtns = React.createClass({
	
	render: function() {
		
			return(<button value={this.props.id} onClick={this._submit}>Goal</button>)
		
		
	}
});

module.exports = PostBtns;