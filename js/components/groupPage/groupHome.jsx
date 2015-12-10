var React = require('react');
var GroupPostCollection = require('../../collections/groupPostCollection');
var Post = require('./post/post.jsx');

var GroupHome = React.createClass({

	render: function() {
		return (
			<div>
				<h1 id="bigTitle">UpgrAid</h1>
			<div id="postColumn">
				<p>User: {this.props.user}</p>
				<ul>
				 {this.props.posts.map(function(post){
						return <Post key={post.id} data={post} /> })}
				</ul>
			</div>
		</div>
		)
	}
});






module.exports = GroupHome;
