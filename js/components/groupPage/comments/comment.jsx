var React = require('react');
var Comment = React.createClass({
	render:function(){
		console.log(this.props);
		return(<p>test</p>)
	}
});

module.exports = Comment;