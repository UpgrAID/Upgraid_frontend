var React = require('react');
var Comment = React.createClass({
	render:function(){
		var test=this.props.comments.map(function(obj){
			return(<p>{obj.description}</p>)
		})
		return(<div>{test}</div>)
	}
});

module.exports = Comment;