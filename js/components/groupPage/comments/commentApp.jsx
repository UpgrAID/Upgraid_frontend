var React = require('react');
var CommentInput = require('./commentInput.jsx');
var Comment = require('./comment.jsx');

var CommentApp = React.createClass({
	getInitialState: function () {
		return {
			data: this.props.data,

		}
	},
	_addInput: function(collection) {
			this.setState({
			data: collection
		})
	},
	render:function() {
		return(<div>
				<CommentInput postId ={this.props.postId} addInput = {this.props.addInput}/>
				<Comment data = {this.props.data} comments={this.props.comments}/>
			</div>)
	}
});

module.exports = CommentApp;