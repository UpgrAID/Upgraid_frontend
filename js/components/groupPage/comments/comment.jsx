var React = require('react');

var Comment = React.createClass({
	render:function(){
		var test=this.props.data.map(function(obj){
			return(
				<p className="commentBox"><span className="commenter">{obj.user.username}:</span>{obj.description}</p>)
		})
		return(<div>Comments:{test}</div>)
	}
});

module.exports = Comment;
