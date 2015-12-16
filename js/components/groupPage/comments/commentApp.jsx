var React = require('react');
var CommentInput = require('./commentInput.jsx');
var Comment = require('./comment.jsx');

var CommentApp = React.createClass({
	render:function() {
		return(<div>
				<CommentInput postId ={this.props.postId}/>
				<Comment/>
			</div>)
	}
});

module.exports = CommentApp;