var React = require('react');
var Backbone = require('backbone');
var User = require('../../../models/user');


var Post = React.createClass({
	
		render: function() {
			return (
				<li className="singlePost">
					<p>{this.props.data.user}</p>
					<p>{this.props.data.title}</p>
					<p>{this.props.data.description}</p>
				</li>
			)
		}
});

module.exports = Post;
