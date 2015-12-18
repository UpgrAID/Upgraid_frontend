var React = require('react');

var OtherPosts = React.createClass({
	render: function() {
		var test=this.props.posts.map(function(obj){
				return(<div key={obj.id}>
						<p  className='otherPostTitle'>{obj.title}</p>
					    <p  className='otherPostDescription'>{obj.description}</p>
					    </div>
					)})

			
				return(<div id="otherPostsContainer">
							<h2>Posts</h2>
							{test}
						</div>)
	}
});

module.exports = OtherPosts;
