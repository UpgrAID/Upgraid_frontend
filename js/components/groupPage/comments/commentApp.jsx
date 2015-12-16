var React = require('react');
var CommentInput = require('./commentInput.jsx');
var Comment = require('./comment.jsx');

var CommentApp = React.createClass({
	getInitialState: function () {
		return {
			data: this.props.comments,

		}
	},
	_addInput: function(collection) {
		
			this.setState({
			data: collection
		})
			
	},
	render:function() {
		props=this.props;
		return(<div>
				<CommentInput postId ={this.props.postId} addInput = {this._addInput} data={this.state.data}/>
				<Comment data={this.state.data} addInput = {this._addInput}/>
			</div>)
	}
});

module.exports = CommentApp;