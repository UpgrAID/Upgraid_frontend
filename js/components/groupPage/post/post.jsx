var React = require('react');
var Backbone = require('backbone');
var User = require('../../../models/user');


var Post = React.createClass({

		render: function() {
			return (
				<li className="singlePost">
					<p className="postText userName">{this.props.data.user}</p>
					<p className="postText title">{this.props.data.title}</p>
					<p className="postText">{this.props.data.description}</p>
				</li>
			)
		}
});

module.exports = Post;
