var React = require('react');
var PostInput = require('./postInput.jsx')
var PostItem = require('./postItem.jsx')

var PostListApp = React.createClass({
	getInitialState: function () {
		return {
			data: this.props.data,
			
		}
	},
	render: function() {
		return(<div>
		<PostInput id="postInput"/>
		<PostItem data={this.props.data}/>
		</div>
		)
	}
	
});

module.exports = PostListApp;