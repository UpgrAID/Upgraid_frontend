var React = require('react');
var GroupPostCollection = require('../../collections/groupPostCollection');
var Post = require('./post/post.jsx');


var GroupHome = React.createClass({

	render: function() {
		return (
			<div>
				<Navbar />
			<div id="postColumn">
				<p id="userTag">User: {this.props.user}</p>
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
