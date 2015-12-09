var React = require('react');
var PostInput = require('./postInput.jsx');
var PostItem = require('./postItem.jsx');
var Post = require('./post.jsx');

var PostListApp = React.createClass({
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
	render: function() {
		return(<div>
					<PostInput id="postInput"data={this.state.data} addInput={this._addInput}/>
					<PostItem data={this.state.data} addInput={this._addInput}/>
				</div>
			)
	}
	
});

module.exports = PostListApp;