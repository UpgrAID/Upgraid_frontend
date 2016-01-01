var React = require('react');

var Comment = React.createClass({

	render:function(){
			console.log('q',this.props)
		var test=this.props.data.map(function(obj){
			return(
				<p className="commentBox" key={obj.id}><span className="commenter">{obj.username}: </span>{obj.description}</p>)
		})
		return(<div>{test}</div>)
	}
});

module.exports = Comment;
